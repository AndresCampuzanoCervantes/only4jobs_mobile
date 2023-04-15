import {ScrollView} from 'native-base';
import {useState} from 'react';
import {View} from 'react-native';
import {SearchBar} from 'react-native-screens';
import ViewSearch from '../../components/Search';
import {colors} from '../../theme/appTheme';

const Job = () => {
  //busqueda
  const [, setSearch] = useState('');

  return (
    <ScrollView style={{backgroundColor: colors.primary}}>
      <View>
        {/* vista search */}
        <ViewSearch setSearch={setSearch} />
        <SearchBar />
      </View>
    </ScrollView>
  );
};

export default Job;
