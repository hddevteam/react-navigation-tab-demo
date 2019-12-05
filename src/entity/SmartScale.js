import React,{Component} from 'react'
import {
    StyleSheet,
    Dimensions,
    Platform,
    ToastAndroid,
    PixelRatio
} from 'react-native'

const fontSizeScaler = PixelRatio.get()/PixelRatio.getFontScale();
  const {height,width}=Dimensions.get('window');
//初始样式，即手机上的样式
    const SmartScale = {
        //HomePicturePage 页面 判断每行几张图片有关变量
        HomePicturePage_rowPictureNumbers: 4,
        HomePicturePage_cellHeight: (width - 2) / 4,
        HomePicturePage_cellBottomView_width: width / 4,
        HomePicturePage_cellBottomView_height: (width - 4) / 4,
        HomePicturePage_btnTextView1_fontSize: 16,
        HomePicturePage_cellview_height:width/4,
        HomePicturePage_circle_width: 400*(7/60),
        HomePicturePage_circle_height: 400*(7/60),
        HomePicturePage_circle_borderRadius: 400*(7/120),
        //ConnectFailed 页面样式 和 DownloadNoTask 页面样式
        width: width,
        height: height,
        ConnectFailed_pic_marginTop: 0,
        ConnectFailed_pic_width: 100,
        ConnectFailed_pic_marginLeft: (width / 2) - 50,
        ConnectFailed_maintext_fontSize: 16,
        ConnectFailed_maintext_margin: 20,
        ConnectFailed_button_height: 30,
        ConnectFailed_button_width: 100,
        ConnectFailed_button_borderRadius: 5,
        ConnectFailed_button_fontSize: 16,
        ConnectFailed_picture_width: 120,
        ConnectFailed_picture_height: 100,
        ConnectFailed_picture_marginLeft: width / 2 - 60,
        ConnectFailed_noTaskText_fontSize: 16,
        ConnectFailed_noTaskText_marginTop: 20,
        ConnectFailed_noTaskImage_width: 110,
        ConnectFailed_noTaskImage_height: 110,
        //底部导航栏样式.
        IndexTabNavigation_iconStyle_width: 26,
        IndexTabNavigation_iconStyle_height: 26,
        IndexTabNavigation_labelStyle_fontSize: 12,
        IndexTabNavigation_style_height: 52,
        IndexTabNavigation_textalign: 'center',
        IndexTabNavigation_iconalign: 'center',
        IndexTabNavigation_flexdirection: 'column',
        IndexTabNavigation_tab: 'flex-end',
        IndexTabNavigation_labelbottom: 4,
        //DownloadBottomMenuComponent 页面样式
        DownloadBottomMenuComponent_componentView_height: 52,
        DownloadBottomMenuComponent_imageView_width: 24,
        DownloadBottomMenuComponent_imageView_height: 24,
        DownloadBottomMenuComponent_imageView_bottom: 14,
        DownloadBottomMenuComponent_loadImage_width: 24,
        DownloadBottomMenuComponent_loadImage_height: 24,
        DownloadBottomMenuComponent_downloadText_fontSize: 18,
        //ShamNavigator导航栏样式
        ShameNavigator_navigatorStyles_height: 40,
        ShameNavigator_LeftImg_width: 18,
        ShameNavigator_LeftImg_height: 18,
        ShameNavigator_fontSize: 16,
        //设备界面样式
        DeviceList_iconview_width: 48,
        DeviceList_iconview_height: 70,
        DeviceList_icon_width: 22,
        DeviceList_icon_height: 22,
        DeviceList_listview_height: 60,
        DeviceList_header_fontSize: 16,
        DeviceList_body_fontSize: 12,
        DeviceList_headertext_fontSize: 13,
        DeviceList_content_left: 8,
        DeviceList_touchable_left: 0,
        DeviceList_copy_right: 16,
        DeviceList_container_left: 0,

        //下载列表item样式
        DownloadList_listview_height: 80,
        DownloadList_thumbnail_width: 60,
        DownloadList_thumbnail_height: 60,
        DownloadList_leftview_width: 80,
        DownloadList_picName_margin: 12,
        DownloadList_progress_padding: 14,
        DownloadList_rightview_width: width - 80,
        //LightboxOverlay 页面样式
        LightboxOverlay_headerView_lineHeight: 20,
        LightboxOverlay_headerTextView_fontSize: 18,
        LightboxOverlay_header_fontSize: 16,
        LightboxOverlay_downloadView_width: 20,
        LightboxOverlay_downloadView_height: 20,
        LightboxOverlay_footer_fontSize: 16,
        LightboxOverlay_footer_height: 90,
        LightboxOverlay_closeButton_lineHeight: 20,
        LightboxOverlay_closeButton_width: 20,
        LightboxOverlay_closeButton_height: 20,
        LightboxOverlay_footerTextView_fontSize: 14,

        //remote
        RemoteControl_paramsetting_height:55 + (Platform.OS == 'ios' ? 0 : 2),
        RemoteControl_paramsettingview_height:60,
        RemoteControl_paramsetting_width:65,
        //RemoteControlPage
        RemoteControlPage_parametersTitle_fontSize: 16,
        RemoteControlPage_PropsSettingsView_bottom: 60,
        RemoteControlPage_BottomView_height: 60,
        RemoteControlPage_takePhotosView_height: 56 - (Platform.OS == 'ios' ? 0 : 12),
        RemoteControlPage_takePhotosView_width: 56 - (Platform.OS == 'ios' ? 0 : 12),
        RemoteControlPage_RemoteControlBtn_bottom: 13 - (Platform.OS == 'ios' ? 0 : 3),
        RemoteControlPage_RemoteControlBtn_width: 32,
        RemoteControlPage_RemoteControlBtn_height: 32,
        RemoteControlPage_SdCard_height: 16,
        RemoteControlPage_SdCard_width: 14,
        RemoteControlPage_SdCardRightText_fontSize: 14,
        RemoteControlPage_SdCardRight_width: 40,
        RemoteControlPage_SdCard_Flex: 1.7,
        RemoteControlPage_SdCard_HFlex: 1.82,
        RemoteControlPage_PropsSettingsView_Flex: 1.2,
        RemoteControlPage_PropsSettingsView_HFlex: 1.08,
        RemoteControlPage_BottomView_Flex: 1.1,
        RemoteControlPage_exposureMode_fontSize : 24,
        RemoteControlPage_HSdCardView_top: 40,

        //SingleChoiceDialog
        SingleChoiceDialog_Modal_width:height*0.8,
        //Electricity
        Electricity_electricityView_width : 21,
        Electricity_electricityView_height : 16,
        //NewPicture
        NewPicture_newPictureView_width : 50,
        NewPicture_newPictureView_height : 30,
    };
//当屏幕宽度大于等于600小于等于750时，应用以下样式
    if ((width<height && width >= 600 && width <= 750) || (width>height && height>=600 && height <= 750)){
        SmartScale.width = width;
        SmartScale.height = height;
        //HomePicturePage 页面 判断每行几张图片有关变量
        SmartScale.HomePicturePage_rowPictureNumbers = 5;
        SmartScale.HomePicturePage_cellHeight = (width - 2.5) / 5;
        SmartScale.HomePicturePage_cellBottomView_width = width / 5;
        SmartScale.HomePicturePage_cellBottomView_height = (width - 5) / 5;
        SmartScale.HomePicturePage_btnTextView1_fontSize = 18;
        SmartScale.HomePicturePage_cellview_height = width/5;
        SmartScale.HomePicturePage_circle_width= 600*(7/60),
        SmartScale.HomePicturePage_circle_height= 600*(7/60),
        SmartScale.HomePicturePage_circle_borderRadius= 650*(7/120),

            //ConnectFailed 页面样式 和 DownloadNoTask 页面样式
        SmartScale.ConnectFailed_pic_marginTop = 50;
        SmartScale.ConnectFailed_pic_width = 150;
        SmartScale.ConnectFailed_pic_marginLeft = (width / 2) - 75;
        SmartScale.ConnectFailed_maintext_fontSize = 20;
        SmartScale.ConnectFailed_maintext_margin = 40;
        SmartScale.ConnectFailed_button_height = 45;
        SmartScale.ConnectFailed_button_width = 150;
        SmartScale.ConnectFailed_button_borderRadius = 8;
        SmartScale.ConnectFailed_button_fontSize = 18;
        SmartScale.ConnectFailed_picture_width = 220;
        SmartScale.ConnectFailed_picture_height = 220;
        SmartScale.ConnectFailed_picture_marginLeft = width / 2 - 110;
        SmartScale.ConnectFailed_noTaskText_fontSize = 20;
        SmartScale.ConnectFailed_noTaskText_marginTop = 40;
        SmartScale.ConnectFailed_noTaskImage_width = 150;
        SmartScale.ConnectFailed_noTaskImage_height = 150;
        //底部导航栏样式.
        SmartScale.IndexTabNavigation_iconStyle_width = 30;
        SmartScale.IndexTabNavigation_iconStyle_height = 30;
        SmartScale.IndexTabNavigation_labelStyle_fontSize = 12;
        SmartScale.IndexTabNavigation_style_height = 55;
        //DownloadBottomMenuComponent 页面样式
        SmartScale.DownloadBottomMenuComponent_componentView_height = 60;
        SmartScale.DownloadBottomMenuComponent_imageView_width = 32;
        SmartScale.DownloadBottomMenuComponent_imageView_height = 32;
        SmartScale.DownloadBottomMenuComponent_imageView_bottom = 15;
        SmartScale.DownloadBottomMenuComponent_loadImage_width = 32;
        SmartScale.DownloadBottomMenuComponent_loadImage_height = 32;
        SmartScale.DownloadBottomMenuComponent_downloadText_fontSize = 20;
        //ShamNavigator导航栏样式
        SmartScale.ShameNavigator_navigatorStyles_height = 50;
        SmartScale.ShameNavigator_LeftImg_width = 24;
        SmartScale.ShameNavigator_LeftImg_height = 24;
        SmartScale.ShameNavigator_fontSize = 20;
        //DownloadFlatlist
        SmartScale.DownloadList_listview_height = 105;
        SmartScale.DownloadList_thumbnail_width = 80;
        SmartScale.DownloadList_thumbnail_height = 80;
        SmartScale.DownloadList_leftview_width = 95;
        SmartScale.DownloadList_picName_margin = 21;
        SmartScale.DownloadList_progress_padding = 21;
        SmartScale.DownloadList_rightview_width = width - 105;

        //DevicePage
        // SmartScale.DeviceList_headertext_fontSize = 14;
        SmartScale.DeviceList_listview_height = 70;
        //LightboxOverlay 页面样式
        SmartScale.LightboxOverlay_headerView_lineHeight = 20;
        SmartScale.LightboxOverlay_headerTextView_fontSize = 20;
        SmartScale.LightboxOverlay_header_fontSize = 18;
        SmartScale.LightboxOverlay_downloadView_width = 24;
        SmartScale.LightboxOverlay_downloadView_height = 24;
        SmartScale.LightboxOverlay_footer_fontSize = 16;
        SmartScale.LightboxOverlay_footer_height = 100;
        SmartScale.LightboxOverlay_closeButton_lineHeight = 20;
        SmartScale.LightboxOverlay_closeButton_width = 24;
        SmartScale.LightboxOverlay_closeButton_height = 24;
        SmartScale.LightboxOverlay_footerTextView_fontSize = 16;

        //RemoteControlPage
        SmartScale.RemoteControlPage_parametersTitle_fontSize = 18;
        SmartScale.RemoteControlPage_PropsSettingsView_bottom = 60;
        SmartScale.RemoteControlPage_BottomView_height = 60;
        SmartScale.RemoteControlPage_takePhotosView_height = 56 - (Platform.OS == 'ios' ? 0 : 12);
        SmartScale.RemoteControlPage_takePhotosView_width = 56 - (Platform.OS == 'ios' ? 0 : 12);
        SmartScale.RemoteControlPage_RemoteControlBtn_bottom = 13 - (Platform.OS == 'ios' ? 0 : 3);
        SmartScale.RemoteControlPage_RemoteControlBtn_width = 40;
        SmartScale.RemoteControlPage_RemoteControlBtn_height = 40;
        SmartScale.RemoteControlPage_SdCard_height = 16;
        SmartScale.RemoteControlPage_SdCard_width = 14;
        SmartScale.RemoteControlPage_SdCardRightText_fontSize = 14;
        SmartScale.RemoteControlPage_SdCardRight_width = 40;
        SmartScale.RemoteControlPage_SdCard_Flex = 1.8;
        SmartScale.RemoteControlPage_SdCard_HFlex = 1.92;
        SmartScale.RemoteControlPage_PropsSettingsView_Flex = 1.2;
        SmartScale.RemoteControlPage_PropsSettingsView_HFlex = 1.08;
        SmartScale.RemoteControlPage_BottomView_Flex = 1;
        SmartScale.RemoteControlPage_exposureMode_fontSize = 28;
        SmartScale.RemoteControlPage_HSdCardView_top = 45;
        //Electricity
        SmartScale.Electricity_electricityView_width = 31;
        SmartScale.Electricity_electricityView_height = 24;
        //NewPicture
        SmartScale.NewPicture_newPictureView_width = 60;
        SmartScale.NewPicture_newPictureView_height = 36;
    }
//当屏幕宽度大于750时，应用以下样式
    if ((width<height && width > 750)||(width>height && height> 750)) {
        SmartScale.width = width;
        SmartScale.height = height;
        //HomePicturePage 页面 判断每行几张图片有关变量
        SmartScale.HomePicturePage_rowPictureNumbers = 6;
        SmartScale.HomePicturePage_cellHeight = (width - 3) / 6;
        SmartScale.HomePicturePage_cellBottomView_width = width / 6;
        SmartScale.HomePicturePage_cellBottomView_height = (width - 6) / 6;
        SmartScale.HomePicturePage_btnTextView1_fontSize = 20;
        SmartScale.HomePicturePage_cellview_height = width/6;
        SmartScale.HomePicturePage_circle_width= 600*(7/60),
        SmartScale.HomePicturePage_circle_height= 600*(7/60),
        SmartScale.HomePicturePage_circle_borderRadius= 650*(7/120),

            //ConnectFailed 页面样式 和 DownloadNoTask 页面样式
        SmartScale.ConnectFailed_pic_marginTop = 50;
        SmartScale.ConnectFailed_pic_width = 150;
        SmartScale.ConnectFailed_pic_marginLeft = (width / 2) - 75;
        SmartScale.ConnectFailed_maintext_fontSize = 22;
        SmartScale.ConnectFailed_maintext_margin = 60;
        SmartScale.ConnectFailed_button_height = 45;
        SmartScale.ConnectFailed_button_width = 150;
        SmartScale.ConnectFailed_button_borderRadius = 8;
        SmartScale.ConnectFailed_button_fontSize = 20;
        SmartScale.ConnectFailed_picture_width = 240;
        SmartScale.ConnectFailed_picture_height = 240;
        SmartScale.ConnectFailed_picture_marginLeft = width / 2 - 120;
        SmartScale.ConnectFailed_noTaskText_fontSize = 24;
        SmartScale.ConnectFailed_noTaskText_marginTop = 60;
        //底部导航栏样式.
        SmartScale.IndexTabNavigation_iconStyle_width = 32;
        SmartScale.IndexTabNavigation_iconStyle_height = 32;
        SmartScale.IndexTabNavigation_labelStyle_fontSize = 15;
        SmartScale.IndexTabNavigation_style_height = 55;
        SmartScale.IndexTabNavigation_textalign = 'right';
        SmartScale.IndexTabNavigation_iconalign = 'flex-start';
        SmartScale.IndexTabNavigation_flexdirection = 'row';
        SmartScale.IndexTabNavigation_tab = 'center';
        SmartScale.IndexTabNavigation_labelbottom = 0;
        //DownloadBottomMenuComponent 页面样式
        SmartScale.DownloadBottomMenuComponent_componentView_height = 70;
        SmartScale.DownloadBottomMenuComponent_imageView_width = 32;
        SmartScale.DownloadBottomMenuComponent_imageView_height = 32;
        SmartScale.DownloadBottomMenuComponent_imageView_bottom = 20;
        SmartScale.DownloadBottomMenuComponent_loadImage_width = 32;
        SmartScale.DownloadBottomMenuComponent_loadImage_height = 32;
        SmartScale.DownloadBottomMenuComponent_downloadText_fontSize = 22;
        //ShamNavigator导航栏样式
        SmartScale.ShameNavigator_navigatorStyles_height = 50;
        SmartScale.ShameNavigator_LeftImg_width = 28;
        SmartScale.ShameNavigator_LeftImg_height = 28;
        SmartScale.ShameNavigator_fontSize = 22;
        //DevicesList
        SmartScale.DeviceList_iconview_height = 48;
        SmartScale.DeviceList_iconview_width = 48;
        SmartScale.DeviceList_icon_width = 29;
        SmartScale.DeviceList_icon_height = 29;
        SmartScale.DeviceList_listview_height = 85;
        SmartScale.DeviceList_header_fontSize = 18;
        SmartScale.DeviceList_body_fontSize = 14;
        SmartScale.DeviceList_headertext_fontSize = 16;
        SmartScale.DeviceList_content_left = 24;
        SmartScale.DeviceList_touchable_left = 24;
        SmartScale.DeviceList_copy_right = 12;
        SmartScale.DeviceList_container_left = 0;

        //DownloadFlatList
        SmartScale.DownloadList_listview_height = 155;
        SmartScale.DownloadList_thumbnail_width = 115;
        SmartScale.DownloadList_thumbnail_height = 115;
        SmartScale.DownloadList_leftview_width = 155;
        SmartScale.DownloadList_picName_margin = 25;
        SmartScale.DownloadList_progress_padding = 50;
        SmartScale.DownloadList_rightview_width = width - 165;
        //LightboxOverlay 页面样式
        SmartScale.LightboxOverlay_headerView_lineHeight = 25;
        SmartScale.LightboxOverlay_headerTextView_fontSize = 20;
        SmartScale.LightboxOverlay_header_fontSize = 20;
        SmartScale.LightboxOverlay_downloadView_width = 28;
        SmartScale.LightboxOverlay_downloadView_height = 28;
        SmartScale.LightboxOverlay_footer_fontSize = 16;
        SmartScale.LightboxOverlay_footer_height = 120;
        SmartScale.LightboxOverlay_closeButton_lineHeight = 25;
        SmartScale.LightboxOverlay_closeButton_width = 28;
        SmartScale.LightboxOverlay_closeButton_height = 28;
        SmartScale.LightboxOverlay_footerTextView_fontSize = 16;

        //remote
        SmartScale.RemoteControl_paramsetting_height = 85;
        SmartScale.RemoteControl_paramsettingview_height = 90;
        SmartScale.RemoteControl_paramsetting_width = 125;

        //RemoteControlPage
        SmartScale.RemoteControlPage_parametersTitle_fontSize = 20;
        SmartScale.RemoteControlPage_PropsSettingsView_bottom = 80;
        SmartScale.RemoteControlPage_BottomView_height = 80;
        SmartScale.RemoteControlPage_takePhotosView_height = 63 - (Platform.OS == 'ios' ? 0 : 12);
        SmartScale.RemoteControlPage_takePhotosView_width = 63 - (Platform.OS == 'ios' ? 0 : 12);
        SmartScale.RemoteControlPage_RemoteControlBtn_bottom = 20 - (Platform.OS == 'ios' ? 0 : 3);
        SmartScale.RemoteControlPage_RemoteControlBtn_width = 48;
        SmartScale.RemoteControlPage_RemoteControlBtn_height = 48;
        SmartScale.RemoteControlPage_SdCard_height = 18;
        SmartScale.RemoteControlPage_SdCard_width = 16;
        SmartScale.RemoteControlPage_SdCardRightText_fontSize = 16;
        SmartScale.RemoteControlPage_SdCardRight_width = 60;
        SmartScale.RemoteControlPage_SdCard_Flex = 2.59;
        SmartScale.RemoteControlPage_SdCard_HFlex = 2.59;
        SmartScale.RemoteControlPage_PropsSettingsView_Flex = 0.81;
        SmartScale.RemoteControlPage_PropsSettingsView_HFlex = 0.81;
        SmartScale.RemoteControlPage_BottomView_Flex = 0.6;
        SmartScale.RemoteControlPage_exposureMode_fontSize = 30;
        SmartScale.RemoteControlPage_HSdCardView_top = 50;
       // SingleChoiceDialog
        SmartScale.SingleChoiceDialog_Modal_width = height*0.8

        //Electricity
        SmartScale.Electricity_electricityView_width = 31;
        SmartScale.Electricity_electricityView_height = 24;
        //NewPicture
        SmartScale.NewPicture_newPictureView_width = 70;
        SmartScale.NewPicture_newPictureView_height = 42;
}


export default SmartScale;