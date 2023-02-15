import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import mainPageBackgroundImage from '../../../assets/mainpage/mainpage_background_image.jpg'
import styles from "./MainPage.css";
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';


function MainPage() {

    const styles = {
      main_chart: {
        backgroundColor: '#5784DB',
        color: 'white',
        height: '200px',
        '&:hover': {
          backgroundColor: '#5784DB',
          opacity: '0.9'
        },
        '&:active': {
          backgroundColor: '#5784DB',
          opacity: '0.7'
        }
      },
      main_trade: {
        backgroundColor: '#13358E',
        color: 'white',
        height: '100%',
        '&:hover': {
          backgroundColor: '#13358E',
          opacity: '0.9'
        },
        '&:active': {
          backgroundColor: '#13358E',
          opacity: '0.7'
        }
      },
      main_community: {
        backgroundColor: '#41A1D8',
        color: 'white',
        height: '100%',
        '&:hover': {
          backgroundColor: '#41A1D8',
          opacity: '0.9'
        },
        '&:active': {
          backgroundColor: '#41A1D8',
          opacity: '0.7'
        }
      },
      main_background: {
        backgroundImage: `url(${mainPageBackgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '70vh',
        opacity: '0.5'
      },
      main_background_color: {
        backgroundColor: 'blue',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        opacity: '0.5'
      },
      main_text_on_image: {
        color: 'black',
        position: 'absolute',
        right: '10%',
        left: '7%',
        bottom: '45%'
      }
    };

    const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      padding: theme.spacing(0.5),
      justifyItems: 'center',
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));

    return (
        <>
            <div style={styles.main_background}>
              <div style={styles.main_background_color}/>
            </div>
            <div style={styles.main_text_on_image}>
              <div className="mainFont">Z세대들을 위한 커뮤니티 기반 가상화폐 관리 서비스</div>
              <div className="mainFont2">자신의 거래 수익률 확인, 매매일지 작성을 통해 슬기로운 투자를 할 수 있도록 도와주는 맞춤형 투자관리 홈페이지입니다.</div>
              <div className="mainFont3"><a href="upbitMainPage">GET STARTED NOW</a></div>
            </div>
            <div>
              <Grid container spacing={0}>
                <Grid item xs={12} sm={6} md={4}>
                  <a href="upbitMainPage">
                    <Item sx={styles.main_chart}>
                      <div style={{marginTop: '50px'}}>
                        <a href="upbitMainPage">
                          <QueryStatsOutlinedIcon sx={{ fontSize: 90 }}/>
                          <span style={{ margin: '12px', fontSize: 25 }}> 실시간 차트</span>
                        </a>
                      </div>
                    </Item>
                  </a>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <a href="diary">
                    <Item sx={styles.main_trade}>
                      <div style={{marginTop: '50px'}}>
                        <a href="payment">
                          <AddCardOutlinedIcon sx={{ fontSize: 90 }}/>
                          <span style={{ margin: '12px', fontSize: 25 }}> 거래하기</span>
                        </a>
                      </div>
                    </Item>
                  </a>

                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <a href="community">
                    <Item sx={styles.main_community}>
                      <div style={{marginTop: '50px'}}>
                        <a href="community">
                          <ForumOutlinedIcon sx={{ fontSize: 90 }}/>
                          <span style={{ margin: '12px', fontSize: 25 }}> 커뮤니티</span>
                        </a>
                      </div>
                    </Item>
                  </a>
                </Grid>
              </Grid>
            </div>
        </>
    );
}
export default MainPage;