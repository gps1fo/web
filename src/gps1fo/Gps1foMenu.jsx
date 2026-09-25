// GPS 1fo — entrées de menu ajoutées à la carte (ADR-0011 du méta-dépôt).
//
// Ce fichier est à NOUS : il est ajouté au fork, jamais fusionné avec l'amont, et hors budget de
// divergence. Le seul fichier amont touché est SettingsMenu.jsx, et de deux lignes seulement
// (import + <Gps1foMenu />, patch P-002). Toute entrée future s'ajoute ICI, sans nouveau patch.
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { useSelector } from 'react-redux';
import { useLocalization } from '../common/components/LocalizationProvider';

// Libellés tenus ici, et non dans les 61 traductions de l'amont : les modifier serait un patch
// par langue. Repli sur l'anglais pour toute autre langue.
const ENTREES = [
  {
    cle: 'console',
    lien: '/console/',
    icone: <ReceiptLongIcon />,
    libelles: { fr: 'Factures et consommation', en: 'Invoices and usage' },
  },
];

// Drapeau d'administration, désactivé par défaut (CLAUDE.md §7.11) : l'attribut SERVEUR
// « gps1foConsole ». Propriétaire : Stéphane. Expiration : 2026-12-31 (ADR-0011 §4).
const estActive = (valeur) => valeur === true || valeur === 'true';

const Gps1foMenu = () => {
  const { language } = useLocalization();
  const drapeau = useSelector((state) => state.session.server.attributes?.gps1foConsole);
  if (!estActive(drapeau)) {
    return null;
  }
  const langue = language?.startsWith('fr') ? 'fr' : 'en';
  return ENTREES.map((entree) => (
    // Un VRAI lien, et non le <Link> de react-router : la console est une autre application, sur
    // la même origine. Un <Link> resterait dans la SPA de la carte, qui n'a pas de route
    // /console — écran vide (ADR-0011, Contexte). Le navigateur doit charger la page.
    <ListItemButton key={entree.cle} component="a" href={entree.lien}>
      <ListItemIcon>{entree.icone}</ListItemIcon>
      <ListItemText primary={entree.libelles[langue]} sx={{ whiteSpace: 'nowrap' }} />
    </ListItemButton>
  ));
};

export default Gps1foMenu;
