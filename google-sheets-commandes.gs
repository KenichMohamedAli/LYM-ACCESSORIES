/**
 * ═══════════ Accessories by LYM — récepteur des commandes ═══════════
 *
 * ⏱️ Mise en place, une seule fois (5 minutes) :
 *
 * 1. ouvre https://sheets.new  →  nomme le fichier « LYM Commandes » (Cmd+S).
 * 2. Menu Extensions → Apps Script.
 * 3. Efface tout le code par défaut, colle le contenu de ce fichier.
 * 4. Cmd+S pour enregistrer.
 * 5. Bouton Déployer → Nouveau déploiement → (roue dentée) Type : Application Web
 *      - Exécuter en tant que :  Moi, <ton compte>
 *      - Qui peut accéder :      Tout le monde
 *    → Déployer → « Autoriser l'accès » (ton compte Google) → Advanced → Go to
 *      project (unsafe) → Allow.
 * 6. Copie l'URL qui se termine par /exec.
 * 7. Ouvre web/app.js, ligne 8-11 : colle cette URL entre les guillemets de SHEETS_URL.
 *
 * ✅ Test : ouvre l'URL /exec dans un onglet → tu dois voir {"ok":true,...}.
 *    Ensuite passe une fausse commande depuis le site : une ligne s'ajoute dans
 *    l'onglet « Commandes ».
 *
 * Une ligne = une commande. La colonne « Langue » indique la langue du site au moment
 * de la commande (fr / ar / en) ; la colonne « Mode » dit livraison ou retrait campus.
 */

// ⚠️ Doit être identique à SHEETS_KEY dans web/app.js. Sert à ignorer les requêtes
// qui ne viennent pas du site. Ce n'est pas un secret : tout est vérifiable côté feuille.
const CLE = 'lym-commandes';

const NOM_FEUILLE = 'Commandes';

const COLONNES = ['Réf.', 'Date', 'Nom', 'Téléphone', 'Wilaya', 'Commune', 'Adresse',
                  'Mode', 'Articles', 'Qté', 'Sous-total', 'Frais', 'Total', 'Note', 'Langue'];

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);

    let d = {};
    try { d = JSON.parse((e.postData && e.postData.contents) || '{}'); } catch (err) {}
    if (d.key !== CLE) return sortir({ ok: false, error: 'cle' });
    if (!d.ref || !d.name || !d.phone) return sortir({ ok: false, error: 'champs' });

    const f = feuille();

    // Le site retente à l'aveugle si la réponse est illisible : la même référence
    // ne doit jamais écrire deux lignes.
    const derniere = f.getLastRow();
    if (derniere > 1) {
      const refs = f.getRange(2, 1, derniere - 1, 1).getValues();
      for (let i = 0; i < refs.length; i++) {
        if (String(refs[i][0]).trim() === String(d.ref).trim()) {
          return sortir({ ok: true, ref: d.ref, doublon: true });
        }
      }
    }

    f.appendRow([
      d.ref, new Date(), d.name, d.phone, d.wilaya || '', d.city || '', d.address || '',
      d.mode || '', d.items || '', Number(d.qty) || 0, Number(d.subtotal) || 0,
      Number(d.fee) || 0, Number(d.total) || 0, d.note || '', d.lang || ''
    ]);

    return sortir({ ok: true, ref: d.ref });
  } catch (err) {
    return sortir({ ok: false, error: String((err && err.message) || err) });
  } finally {
    try { lock.releaseLock(); } catch (e2) {}
  }
}

// Permet de vérifier le script dans un onglet du navigateur.
function doGet() {
  const f = feuille();
  return sortir({
    ok: true,
    service: 'commandes accessories.by.lym',
    commandes: Math.max(f.getLastRow() - 1, 0)
  });
}

function feuille() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let f = ss.getSheetByName(NOM_FEUILLE);
  if (!f) f = ss.insertSheet(NOM_FEUILLE);

  // Le site écrit toujours dans l'ordre de COLONNES (colonne A, B, C…).
  // On vérifie la ligne 1 en entier : si un titre est en double, déplacé ou
  // renommé, on le remet à la place — sinon les valeurs tombent sous le mauvais titre.
  const ligne1 = f.getRange(1, 1, 1, COLONNES.length).getValues()[0]
    .map(v => String(v).trim());
  const enPlace = COLONNES.every((c, i) => ligne1[i] === c);
  if (!enPlace) {
    f.getRange(1, 1, 1, COLONNES.length).setValues([COLONNES]).setFontWeight('bold');
    f.setFrozenRows(1);
    f.getRange('B2:B').setNumberFormat('dd/MM/yyyy HH:mm');
    f.getRange('K2:M').setNumberFormat('#,##0 "DA"');
    f.setColumnWidths(1, COLONNES.length, 130);
  }
  return f;
}

function sortir(objet) {
  return ContentService
    .createTextOutput(JSON.stringify(objet))
    .setMimeType(ContentService.MimeType.JSON);
}
