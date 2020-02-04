import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../../src/screens/Home';
import PDFExample from '../../src/components/core_handling_pemboran_inti';
import pdf2 from '../../src/components/sop_pemboran_inti';
import pdf3 from '../../src/components/sop_penentuan_titik_bor';
import pdf4 from '../../src/components/SOP_RIGING_UP_MESIN_BOR';
import pdf5 from '../../src/components/SOP_Pengoperasian_DT';
import Pdf6 from '../../src/components/Pdf6';
import Pdf7 from '../../src/components/Pdf7';
import Pdf8 from '../../src/components/Pdf8';
import Pdf9 from '../../src/components/Pdf9';
import Pdf10 from '../../src/components/Pdf10';
import Pdf11 from '../../src/components/Pdf11';
import Pdf12 from '../../src/components/Pdf12';
import Pdf13 from '../../src/components/Pdf13';
import Pdf14 from '../../src/components/Pdf14';
import Pdf15 from '../../src/components/Pdf15';
import Pdf16 from '../../src/components/Pdf16';
import Pdf17 from '../../src/components/Pdf17';
import Pdf18 from '../../src/components/Pdf18';
import Pdf19 from '../../src/components/Pdf19';
import Pdf20 from '../../src/components/Pdf20';
import Pdf21 from '../../src/components/Pdf21';
import Welcome from '../../src/screens/Welcome';
import Pdf22 from '../components/Pdf22';
import Pdf23 from '../components/Pdf23';
import Pdf24 from '../components/Pdf24';
import Pdf25 from '../components/Pdf25';
import Pdf26 from '../components/Pdf26';
import Pdf27 from '../components/Pdf27';
import Pdf28 from '../components/Pdf28';
import Pdf29 from '../components/Pdf29';
import Pdf30 from '../components/Pdf30';
import Pdf31 from '../components/Pdf31';
import Pdf32 from '../components/Pdf32';
import Pdf33 from '../components/Pdf33';
import Pdf34 from '../components/Pdf34';
import Pdf35 from '../components/Pdf35';
import Pdf36 from '../components/Pdf36';
import Pdf37 from '../components/Pdf37';
import Pdf38 from '../components/Pdf38';
import Pdf39 from '../components/Pdf39';
import Pdf40 from '../components/Pdf40';
import Pdf41 from '../components/Pdf41';
import Pdf42 from '../components/Pdf42';
import Pdf43 from '../components/Pdf43';
import Pdf44 from '../components/Pdf44';
import Pdf45 from '../components/Pdf45';
import Pdf46 from '../components/Pdf46';
import Pdf47 from '../components/Pdf47';
import Pdf48 from '../components/Pdf48';
import Pdf49 from '../components/Pdf49';
import Pdf50 from '../components/Pdf50';
import Pdf51 from '../components/Pdf51';
import Pdf52 from '../components/Pdf52';
import Pdf53 from '../components/Pdf53';
import Pdf54 from '../components/Pdf54';
import Pdf55 from '../components/Pdf55';
import Pdf56 from '../components/Pdf56';
import Pdf57 from '../components/Pdf57';
import Pdf58 from '../components/Pdf58';
import Pdf59 from '../components/Pdf59';
import Pdf60 from '../components/Pdf60';
import Pdf61 from '../components/Pdf61';
import Pdf62 from '../components/Pdf62';
import Pdf63 from '../components/Pdf63';
import Pdf64 from '../components/Pdf64';
import Pdf65 from '../components/Pdf65';
import Pdf66 from '../components/Pdf66';
import Pdf67 from '../components/Pdf67';
import Pdf68 from '../components/Pdf68';
import Pdf69 from '../components/Pdf69';
import Pdf70 from '../components/Pdf70';
import Pdf71 from '../components/Pdf71';
import Pdf72 from '../components/Pdf72';
import Pdf73 from '../components/Pdf73';
import Pdf74 from '../components/Pdf74';
import Pdf75 from '../components/Pdf75';
import Pdf76 from '../components/Pdf76';
import Pdf77 from '../components/Pdf77';
import Pdf78 from '../components/Pdf78';
import Pdf79 from '../components/Pdf79';
import Pdf80 from '../components/Pdf80';
import Pdf81 from '../components/Pdf81';
import Pdf82 from '../components/Pdf82';
import Pdf83 from '../components/Pdf83';
import Pdf84 from '../components/Pdf84';
import Pdf85 from '../components/Pdf85';
import Pdf86 from '../components/Pdf86';
import Pdf87 from '../components/Pdf87';
import Pdf88 from '../components/Pdf88';
import Pdf89 from '../components/Pdf89';
import Pdf90 from '../components/Pdf90';
import Pdf91 from '../components/Pdf91';
import Pdf92 from '../components/Pdf92';
import Pdf93 from '../components/Pdf93';
import Pdf94 from '../components/Pdf94';
import Pdf95 from '../components/Pdf95';
import Pdf96 from '../components/Pdf96';
import Pdf97 from '../components/Pdf97';
import Pdf98 from '../components/Pdf98';
import Pdf99 from '../components/Pdf99';
import Pdf100 from '../components/Pdf100';

const AppNavigator = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        header: null,
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'SOP - PT Sinar Jaya Sultra Utama',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
        headerLeft: null,
      },
    },
    PDFExample: {
      screen: PDFExample,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf2: {
      screen: pdf2,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf3: {
      screen: pdf3,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf4: {
      screen: pdf4,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf5: {
      screen: pdf5,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf6: {
      screen: Pdf6,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf7: {
      screen: Pdf7,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf8: {
      screen: Pdf8,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf9: {
      screen: Pdf9,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf10: {
      screen: Pdf10,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf11: {
      screen: Pdf11,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf12: {
      screen: Pdf12,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf13: {
      screen: Pdf13,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf14: {
      screen: Pdf14,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf15: {
      screen: Pdf15,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf16: {
      screen: Pdf16,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf17: {
      screen: Pdf17,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf18: {
      screen: Pdf18,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf19: {
      screen: Pdf19,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf20: {
      screen: Pdf20,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf21: {
      screen: Pdf21,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf22: {
      screen: Pdf22,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf23: {
      screen: Pdf23,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf24: {
      screen: Pdf24,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf25: {
      screen: Pdf25,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf26: {
      screen: Pdf26,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf27: {
      screen: Pdf27,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf28: {
      screen: Pdf28,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf29: {
      screen: Pdf29,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf30: {
      screen: Pdf30,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf31: {
      screen: Pdf31,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf32: {
      screen: Pdf32,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf33: {
      screen: Pdf33,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf34: {
      screen: Pdf34,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf35: {
      screen: Pdf35,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf36: {
      screen: Pdf36,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf37: {
      screen: Pdf37,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf38: {
      screen: Pdf38,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf39: {
      screen: Pdf39,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf40: {
      screen: Pdf40,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf41: {
      screen: Pdf41,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf42: {
      screen: Pdf42,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf43: {
      screen: Pdf43,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf44: {
      screen: Pdf44,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf45: {
      screen: Pdf45,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf46: {
      screen: Pdf46,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf47: {
      screen: Pdf47,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf48: {
      screen: Pdf48,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf49: {
      screen: Pdf49,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf50: {
      screen: Pdf50,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf51: {
      screen: Pdf51,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf52: {
      screen: Pdf52,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf53: {
      screen: Pdf53,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf54: {
      screen: Pdf54,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf55: {
      screen: Pdf55,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf56: {
      screen: Pdf56,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf57: {
      screen: Pdf57,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf58: {
      screen: Pdf58,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf59: {
      screen: Pdf59,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf60: {
      screen: Pdf60,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf61: {
      screen: Pdf61,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf62: {
      screen: Pdf62,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf63: {
      screen: Pdf63,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf64: {
      screen: Pdf64,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf65: {
      screen: Pdf65,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf66: {
      screen: Pdf66,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf67: {
      screen: Pdf67,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf68: {
      screen: Pdf68,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf69: {
      screen: Pdf69,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf70: {
      screen: Pdf70,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf71: {
      screen: Pdf71,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf72: {
      screen: Pdf72,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf73: {
      screen: Pdf73,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf74: {
      screen: Pdf74,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf75: {
      screen: Pdf75,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf76: {
      screen: Pdf76,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf77: {
      screen: Pdf77,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf78: {
      screen: Pdf78,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf79: {
      screen: Pdf79,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf80: {
      screen: Pdf80,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf81: {
      screen: Pdf81,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf82: {
      screen: Pdf82,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf83: {
      screen: Pdf83,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf84: {
      screen: Pdf84,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf85: {
      screen: Pdf85,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf86: {
      screen: Pdf86,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf87: {
      screen: Pdf87,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf88: {
      screen: Pdf88,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf89: {
      screen: Pdf89,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf90: {
      screen: Pdf90,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf91: {
      screen: Pdf91,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf92: {
      screen: Pdf92,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf93: {
      screen: Pdf93,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf94: {
      screen: Pdf94,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf95: {
      screen: Pdf95,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf96: {
      screen: Pdf96,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf97: {
      screen: Pdf97,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf98: {
      screen: Pdf98,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf99: {
      screen: Pdf99,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
    Pdf100: {
      screen: Pdf100,
      navigationOptions: {
        headerTitle: 'Back',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#C8242F',
        },
      },
    },
  },
  {
    initialRouteName: 'Welcome',
  },
);

export default createAppContainer(AppNavigator);
