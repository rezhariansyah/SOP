import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  Alert,
} from 'react-native';
import {withNavigationFocus} from 'react-navigation';

export class Home extends React.Component {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {
    if (this.props.isFocused) {
      Alert.alert(
        'Exit App',
        'Exiting the application?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => BackHandler.exitApp(),
          },
        ],
        {
          cancelable: false,
        },
      );
      return true;
    }
  };
  render() {
    return (
      <View>
        <ScrollView>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('PDFExample');
            }}>
            <Text> SOP CORE HANDLING PEMBORAN INTI </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf2');
            }}>
            <Text> SOP PEMBORAN INTI </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf3');
            }}>
            <Text> SOP PENENTUAN TITIK BOR </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf4');
            }}>
            <Text> SOP RIGING UP MESIN BOR </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf5');
            }}>
            <Text> SOP PENGOPERASIAN DT </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf6');
            }}>
            <Text> SOP MOTOR GRADER </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf7');
            }}>
            <Text> SOP PENGOPERASIAN EXCAVATOR </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf9');
            }}>
            <Text> SOP PENGOPERASIAN EXCAVATOR DIDALAM TONGKANG </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf10');
            }}>
            <Text> SOP DOZER </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf11');
            }}>
            <Text> SOP COMPACTOR </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf12');
            }}>
            <Text> SOP P2H HEAVY EQUIPMENT </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf13');
            }}>
            <Text> SOP PENGOPERASIAN KENDARAAN RINGAN </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf14');
            }}>
            <Text> PENGGUNAAN PERLINTASAN </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf15');
            }}>
            <Text> PENGISIAN BBM </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf16');
            }}>
            <Text> PENGGUNAAN TABUNG GAS </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf17');
            }}>
            <Text> PEMBELIAN </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf18');
            }}>
            <Text> FORM PERLINTASAN </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf19');
            }}>
            <Text> SOP COMISIONING </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf20');
            }}>
            <Text> SOP LALU LINTAS TAMBANG </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf21');
            }}>
            <Text> SOP PEMERIKSAAN JALAN TAMBANG (Houling Road) </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf22');
            }}>
            <Text> SOP PENGECEKAN KONSIDI APAR </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf23');
            }}>
            <Text> SOP RAMBU JALAN </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf24');
            }}>
            <Text> SOP PENGGUNAAN DAN PERGANTIAN APD </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf25');
            }}>
            <Text> SOP PENYIMPANAN LIMBAH </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf26');
            }}>
            <Text> SOP PENERBITAN PERPANJANGAN DAN PENARIKAN KIMPER </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf27');
            }}>
            <Text> SOP P3K </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf28');
            }}>
            <Text> SOP SAFETY PATROL </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf29');
            }}>
            <Text> SOP INDUKSI KESELAMATAN DAN KESEHATAN KERJA </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf30');
            }}>
            <Text> SOP INSPEKSI </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf31');
            }}>
            <Text> SOP LOG OUT TAG OUT </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf32');
            }}>
            <Text> SOP KERJA RESIKO TINGGI </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf33');
            }}>
            <Text> SOP PEMUSNAHAN DOKUMEN </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf34');
            }}>
            <Text> PENGISIAN BBM FORM </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf35');
            }}>
            <Text> SOP INVESTIGASI KECELAKAAN </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf36');
            }}>
            <Text> SOP KOMUNIKASI K3 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf37');
            }}>
            <Text> SOP PENGELOLAAN DOKUMEN </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf38');
            }}>
            <Text> SOP PELATIHAN KESELAMTAN KERJA </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf39');
            }}>
            <Text>
              {' '}
              SOP IDENTIFIKASI PEMENUHAN PERATURAN PERUNDANG-UNDANGAN{' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf40');
            }}>
            <Text> SOP LKS </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf41');
            }}>
            <Text> SOP AUDIT INTERNAL </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf42');
            }}>
            <Text> TINJAUAN MANAJEMEN </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf43');
            }}>
            <Text> MANAJEMEN RISIKO </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf44');
            }}>
            <Text> IDENTIFIKASI BAHAYA DAN PENILAIAN RISIKO </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf45');
            }}>
            <Text> PENGELOLAAN JASA PERTAMBANGAN </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf46');
            }}>
            <Text> PENGELOLAAN KEADAAN DARURAT </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf47');
            }}>
            <Text> PENGELOLAAN KESELAMATAN OPERASI PERTAMBANGAN </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf48');
            }}>
            <Text> PENANGGULANGAN KEADAAN DARURAT </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf49');
            }}>
            <Text> PENGOLAHAN AIR MINUM </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf50');
            }}>
            <Text> PENGOLAHAN BAHAN MAKANAN </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf51');
            }}>
            <Text> PELAYARAN PASIEN </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf52');
            }}>
            <Text> PEMERIKSAAN BAHAN MAKANANN </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf53');
            }}>
            <Text> PENGOLAHAN KESEHATAN </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf54');
            }}>
            <Text> LEMBAR PENERIMAAN BAHAN MAKANAN </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf55');
            }}>
            <Text> PENATAAN LAHAN </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf56');
            }}>
            <Text> PEMBIBITAN </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf57');
            }}>
            <Text> PENANAMAN </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf58');
            }}>
            <Text> PENGELOLAAN LINGKUNGAN KERJA </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf59');
            }}>
            <Text> INDUKSI LOKAL </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf60');
            }}>
            <Text> INDUKSI TAMU </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf61');
            }}>
            <Text> INDUKSI ULANG </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf62');
            }}>
            <Text> INDUKSI UMUM </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf63');
            }}>
            <Text> KESIMPULAN HASIL INDUKSI </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf64');
            }}>
            <Text> PERATURAN KESELAMATAN KERJA </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf65');
            }}>
            <Text> BAP COMISIONING </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf66');
            }}>
            <Text> DOKUMEN INDUK </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf67');
            }}>
            <Text> FORM COMMISSIONING BARGE (Tongkang) </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf68');
            }}>
            <Text> FORM INVESTIGASI KECELAKAAN </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf69');
            }}>
            <Text> FORM JALAN PRODUKSI </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf70');
            }}>
            <Text> FORM PEMERIKSAAN DAN PEMBERSIHAN APAR </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf71');
            }}>
            <Text> FORM PEMUSNAHAN DOKUMEN </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf72');
            }}>
            <Text> FORM PERGANTIAN DAN PENGAMBILAN APD </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf73');
            }}>
            <Text> FORM PERPANJANGAN KIMPER </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf74');
            }}>
            <Text> FORM SAKSI LANGSUNG DAN SAKSI TIDAK LANGSUNG </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf75');
            }}>
            <Text> SURAT IZIN PEKERJAAN RESIKO TINGGI </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf76');
            }}>
            <Text> SURAT PERNYATAAN PENERBITAN KIMPER </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf77');
            }}>
            <Text> SOP MINE OPERATION </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf78');
            }}>
            <Text> PENGISIAN ORE KE DALAM TONGKANG </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf79');
            }}>
            <Text> SOP PENGAMBILAN SAMPEL </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf80');
            }}>
            <Text> SOP PREPARASI BESAR PRODUKSI </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf81');
            }}>
            <Text> SOP PREPARASI BESAR SAMPEL TONGKANG </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf82');
            }}>
            <Text> SOP PENGAMBILAN SAMPEL CHANNEL </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf83');
            }}>
            <Text> SOP PENGAMBILAN SAMPEL PIT DENGAN MESIN BOR </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf84');
            }}>
            <Text> SOP PENGAMBILAN SAMPEL PRODUKSI </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf85');
            }}>
            <Text> SOP PENGAMBILAN SAMPEL DI STOKPILE </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf86');
            }}>
            <Text> PENGAMBILAN SAMPEL METODE SM </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf87');
            }}>
            <Text> SOP PRESS PELET </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf88');
            }}>
            <Text> SOP PULVERIZER </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf89');
            }}>
            <Text> SOP XRF SPECTROMETER MINIPAL EPSILON </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf90');
            }}>
            <Text> SOP PENERBITAN PERPANJANGAN DAN PERNARIKAN SIMPER </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf91');
            }}>
            <Text> SOP PEMAKAIAN ALAT SURVEY </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf92');
            }}>
            <Text> SOP SURVEY EKSPLORASI </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf93');
            }}>
            <Text> SOP SURVEY KONSTRUKSI </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf94');
            }}>
            <Text> SOP SURVEY TAMBANG </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf95');
            }}>
            <Text> SOP P2H ALAT SURVEY </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf96');
            }}>
            <Text> PENGGANTIAN OLI KENDARAAN </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf97');
            }}>
            <Text> SOP PENGGANTIAN KAMPAS REM BELAKANG </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf98');
            }}>
            <Text> PEMAKAIAN MESIN LAS </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf99');
            }}>
            <Text> PENGUNAAN PERKAKAS TANGAN </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push('Pdf100');
            }}>
            <Text> SOP PEMASANGAN TRACK LINE EXCAVATOR </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    paddingVertical: 20,
    marginHorizontal: 7,
    borderRadius: 5,
    marginVertical: 5,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 2, // Android
  },
});

export default withNavigationFocus(Home);
