import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { CustomDialogTitle } from './CustomDialogTitle';
import { useEffect, useState } from 'react';
import { LANGS } from '../../layouts/dashboard/LanguagePopover';
import { SECPL, SECEN, SECUA, SECRU } from '../../utils/data/SecurityInfo';
export default function SecurityDialog({ open, handleClose }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const { t, i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(LANGS[0].value);

  // i18n has to resolve lang value in next tick
  useEffect(() => {
    setTimeout(() => {
      setSelectedLang(i18n.resolvedLanguage);
    }, 10);
  }, [i18n.resolvedLanguage]);

  let selectedTC = SECPL;
  switch (selectedLang) {
    case 'ua':
      selectedTC = SECUA;
      break;
    case 'ru':
      selectedTC = SECRU;
      break;
    case 'en':
      selectedTC = SECEN;
      break;
  }

  return (
    <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="tc-dialog">
      <CustomDialogTitle onClose={handleClose} id="tc-dialog">
        {t('SecurityInfo')}
      </CustomDialogTitle>
      <DialogContent>
        <Typography component={'pre'} variant={'body1'} style={{ whiteSpace: 'break-spaces' }} dangerouslySetInnerHTML={{ __html: selectedTC }}>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          {t('OK')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
