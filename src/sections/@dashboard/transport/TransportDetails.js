import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Iconify from '../../../components/Iconify';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { fDateTime } from '../../../utils/formatTime';
import Label from '../../../components/Label';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import { DialogTransition } from '../../../components/DialogTransition';
import { CustomDialogTitle } from '../../../components/dialogs/CustomDialogTitle';
import SecurityDialog from '../../../components/dialogs/SecurityDialog';
import Alert from '@mui/material/Alert';

function TransportItem({
  item: {
    avatarUrl,
    name,
    addressFrom,
    addressTo,
    from,
    to,
    isVerified,
    status,
    car,
    date,
    people,
    description = '',
    phone,
    fb,
    email
  },
  onClickEdit,
  onClickDelete
}) {
  const [displayPhone, setDisplayPhone] = React.useState(false);
  const [displayEmail, setDisplayEmail] = React.useState(false);
  const { t, i18n } = useTranslation();

  const handlePhoneClick = () => {
    setDisplayPhone(!displayPhone);
  };
  const handleEmailClick = () => {
    setDisplayEmail(!displayEmail);
  };

  return (
    <Card sx={{ min: 345 }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe" src={avatarUrl} />}
        title={name}
        subheader={t('Wyjazd-od') + ': ' + fDateTime(date)}
        action={
          <React.Fragment>
            <Stack>
              <Label variant="ghost" color={(status === 'szukam' && 'info') || 'success'}>
                {status != null && t(status || 'dam')}
              </Label>
              <Stack direction={'row'} justifyContent={'right'} sx={{pt: 1}}>
                {onClickEdit != null && (
                  <Tooltip title={t('Edytuj')}>
                    <IconButton color={'info'} onClick={onClickEdit}>
                      <Iconify icon="eva:edit-2-fill" width={32} height={32} />
                    </IconButton>
                  </Tooltip>
                )}
                {onClickDelete != null && (
                  <Tooltip title={t('Usuń')}>
                    <IconButton onClick={onClickDelete}>
                      <Iconify icon="flat-color-icons:cancel" width={32} height={32} />
                    </IconButton>
                  </Tooltip>
                )}
              </Stack>
            </Stack>
          </React.Fragment>
        }
      />
      <CardContent>
        <Tooltip title={car}>
          <Box flexDirection={'row'} display={'flex'} sx={{ p: 1 }}>
            <Iconify icon="eva:person-add-fill" width={24} height={28} />
            <Typography variant="h5" sx={{ color: 'text.secondary', pl: 1 }}>
              {people}
            </Typography>
          </Box>
        </Tooltip>
        <Stack direction="column" spacing={2} sx={{ p: 2 }}>
          <Box flexDirection={'row'} display={'flex'}>
            <Typography variant="subtitle2">{t('Jade-z')}:</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', pl: 1 }}>
              {addressFrom}
            </Typography>
          </Box>
          <Box flexDirection={'row'} display={'flex'}>
            <Typography variant="subtitle2">{t('Jade-do')}:</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', pl: 1 }}>
              {addressTo}
            </Typography>
          </Box>
        </Stack>
        <Typography variant="body2" color="text.secondary" style={{ whiteSpace: 'pre-line' }}>
          {description.replaceAll(/↵/g, '\n').replaceAll('\\n', '\n')}
        </Typography>
        {displayPhone && (
          <Box flexDirection={'row'} display={'flex'} sx={{ pt: 1 }}>
            <Typography variant="subtitle2" noWrap>
              {t('Phone')}:
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', pl: 1 }}>
              {phone}
            </Typography>
          </Box>
        )}
        {displayEmail && (
          <Box flexDirection={'row'} display={'flex'} sx={{ pt: 1 }}>
            <Typography variant="subtitle2" noWrap>
              {t('Email')}:
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', pl: 1 }}>
              {email}
            </Typography>
          </Box>
        )}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="phone"
          color={'success'}
          disabled={phone == null || phone === ''}
          onClick={handlePhoneClick}
        >
          <Iconify
            icon={phone ? 'eva:phone-call-fill' : 'eva:phone-off-fill'}
            width={24}
            height={24}
          />
        </IconButton>
        <IconButton
          aria-label="email"
          color={'success'}
          disabled={email == null || email === ''}
          onClick={handleEmailClick}
        >
          <Iconify
            icon={email ? 'eva:email-outline' : 'mdi:email-off-outline'}
            width={24}
            height={24}
          />
        </IconButton>
        <Link href={fb ? fb : undefined} target="_blank">
          <IconButton aria-label="fb" color={'info'} disabled={fb == null || fb === ''}>
            <Iconify icon="eva:facebook-fill" width={24} height={24} />
          </IconButton>
        </Link>
        <Link
          href={`https://www.google.com/maps/dir/?api=1&destination=${from[0]}, ${from[1]}`}
          target="_blank"
        >
          <IconButton aria-label="location" color={'info'} disabled={from == null}>
            <Iconify icon="ion:navigate-circle-outline" width={24} height={24} />
          </IconButton>
        </Link>
      </CardActions>
    </Card>
  );
}

export default function TransportDetails({
  onClose,
  open,
  transport = [],
  onClickEdit,
  onClickDelete,
  showAlert = true
}) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const [locale, setLocale] = React.useState('pl');
  const [showSecurityDialog, setShowSecurityDialog] = React.useState(false);
  const { t, i18n } = useTranslation();

  const handleClose = () => {
    onClose();
  };

  const toggleSecurityDialog = () => {
    setShowSecurityDialog(!showSecurityDialog);
  };

  return (
    <React.Fragment>
      <Dialog
        onClose={handleClose}
        open={open}
        fullScreen={matches}
        TransitionComponent={DialogTransition}
      >
        <CustomDialogTitle onClose={handleClose}>{t('SzczegolyTransportu')}</CustomDialogTitle>
        <DialogContent>
          <Stack spacing={3} sx={{ p: 3, pr: 0, pl: 0 }}>
            {showAlert && (
              <Alert severity="error" onClick={toggleSecurityDialog} style={{ cursor: 'pointer' }}>
                <strong>{t('SecurityInfo')}</strong>
              </Alert>
            )}
            {transport.map((transportItem) => (
              <TransportItem
                key={transportItem.id}
                item={transportItem}
                onClickEdit={onClickEdit ? () => onClickEdit(transportItem) : undefined}
                onClickDelete={onClickDelete ? () => onClickDelete(transportItem) : undefined}
              />
            ))}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
      {showSecurityDialog && <SecurityDialog handleClose={toggleSecurityDialog} open={true} />}
    </React.Fragment>
  );
}
