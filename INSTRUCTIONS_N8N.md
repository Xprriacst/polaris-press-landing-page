# 📋 Instructions d'installation du workflow n8n

## 🎯 Objectif
Capturer automatiquement les inscriptions au webinaire et les enregistrer dans Google Sheets.

---

## 📝 Étape 1 : Préparer votre Google Sheet

1. Créez un nouveau Google Sheet
2. Nommez-le : **"Inscriptions Webinaire Polaris IA"**
3. Créez une feuille nommée : **"Inscriptions"**
4. Ajoutez ces colonnes dans la première ligne :
   - **Prénom**
   - **Email**
   - **Date d'inscription**
   - **Source**

5. Copiez l'ID de votre Google Sheet (c'est la partie dans l'URL entre `/d/` et `/edit`) :
   ```
   https://docs.google.com/spreadsheets/d/VOTRE_ID_ICI/edit
   ```

---

## 🔧 Étape 2 : Importer le workflow dans n8n

1. Connectez-vous à votre instance n8n
2. Cliquez sur **"+ Add workflow"** ou **"Import from file"**
3. Importez le fichier : `n8n-webinaire-workflow.json`
4. Le workflow s'ouvrira automatiquement

---

## 🔑 Étape 3 : Configurer les credentials Google Sheets

1. Dans n8n, allez dans **Settings → Credentials**
2. Cliquez sur **"+ Add Credential"**
3. Cherchez **"Google Sheets OAuth2 API"**
4. Suivez les instructions pour connecter votre compte Google
5. Autorisez l'accès à Google Sheets

---

## ⚙️ Étape 4 : Configurer le node Google Sheets

1. Ouvrez le workflow importé
2. Cliquez sur le node **"Ajouter à Google Sheets"**
3. Dans **"Document"**, sélectionnez votre Google Sheet ou collez l'ID
4. Dans **"Sheet"**, sélectionnez **"Inscriptions"**
5. Vérifiez que les credentials sont bien sélectionnées

---

## 🚀 Étape 5 : Activer le workflow et obtenir l'URL du webhook

1. Cliquez sur le bouton **"Active"** en haut à droite pour activer le workflow
2. Cliquez sur le node **"Webhook - Inscription Webinaire"**
3. Copiez l'URL du webhook qui apparaît (format : `https://votre-instance.n8n.cloud/webhook/webinaire-inscription`)
4. **IMPORTANT : Gardez cette URL, vous en aurez besoin pour la prochaine étape**

---

## 🧪 Étape 6 : Tester le webhook

Vous pouvez tester avec curl :

```bash
curl -X POST https://votre-instance.n8n.cloud/webhook/webinaire-inscription \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "email": "test@example.com"
  }'
```

Vérifiez que la ligne apparaît dans votre Google Sheet !

---

## 🔗 Étape 7 : Intégrer avec votre site web

Une fois que vous avez l'URL du webhook, donnez-la moi et je modifierai le fichier `WebinarHome.jsx` pour envoyer les inscriptions à n8n.

**Format de l'URL à me fournir :**
```
https://votre-instance.n8n.cloud/webhook/webinaire-inscription
```

---

## 📊 Structure des données envoyées

Le formulaire enverra ces données au webhook :

```json
{
  "firstName": "Prénom du participant",
  "email": "email@example.com"
}
```

Le workflow ajoutera automatiquement :
- **timestamp** : Date et heure d'inscription
- **source** : "Landing Page Polaris IA"

---

## ❓ Dépannage

### Le workflow ne se déclenche pas
- Vérifiez que le workflow est bien **activé** (bouton "Active" en vert)
- Vérifiez l'URL du webhook

### Erreur Google Sheets
- Vérifiez que les credentials sont bien configurées
- Vérifiez que l'ID du Google Sheet est correct
- Vérifiez que la feuille "Inscriptions" existe

### CORS Error depuis le site web
- Le workflow inclut déjà les headers CORS nécessaires
- Si le problème persiste, vérifiez les paramètres de votre instance n8n

---

## 📞 Prochaine étape

**Donnez-moi l'URL de votre webhook n8n** et je modifierai automatiquement le code React pour envoyer les inscriptions !
