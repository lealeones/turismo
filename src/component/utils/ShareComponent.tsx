import { Grid, Typography } from '@mui/material';
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, PinterestIcon, PinterestShareButton, RedditIcon, RedditShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton
} from 'next-share';

const ShareComponent = () => {
    return (
        <>


            <Grid container spacing={2}  justifyContent="center" alignItems="center" sx={{textAlign: "center"}}>
                <Grid item xs={12} md={12}><Typography variant='h5'  >Compartilo en las redes sociales</Typography> </Grid>
                <Grid item xs={12} md={12}>
                    <FacebookShareButton
                        url={'https://github.com/next-share'}
                        quote={'next-share is a social share buttons for your next React apps.'}
                        hashtag={'#nextshare'}
                    >
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <WhatsappShareButton
                        url={'https://github.com/next-share'}
                        title={'next-share is a social share buttons for your next React apps.'}
                        separator=":: "
                    >
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                    <TwitterShareButton
                        url={'https://github.com/next-share'}
                        title={'next-share is a social share buttons for your next React apps.'}
                    >
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <TelegramShareButton
                        url={'https://github.com/next-share'}
                        title={'next-share is a social share buttons for your next React apps.'}
                    >
                        <TelegramIcon size={32} round />
                    </TelegramShareButton>
                    <EmailShareButton
                        url={'https://github.com/next-share'}
                        subject={'Next Share'}
                        body="body"
                    >
                        <EmailIcon size={32} round />
                    </EmailShareButton> </Grid>

            </Grid>

        </>
    )
}

export default ShareComponent;