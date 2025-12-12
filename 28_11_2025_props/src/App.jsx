import VongdoiIMG from './vongdoi/VongdoiIMG'
import Vongdoiso from './vongdoi/Vongdoiso'
import Vongdoi from './vongdoi/Vongdoi'
import Khoa_lop from './vidu_props'
import './App.css'
import TinhDiemTB from './form/TinhDiemTB'
import Baitap_Form from './form/Baitap_Form'
import Input from './form/Input'

//bai 1
function App() {
  return (
    <div>
      <Khoa_lop />
      <VongdoiIMG />
      <Vongdoiso />
      <Vongdoi />
      <TinhDiemTB/>
      <Baitap_Form/>
      <Input/>
    </div>
  );
}


//------------bai 2----





// import Counter from './Bai2';
// function App() {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// }

///bài 3

// import Chuyenanh from './Bai3';
// function App() {
//   return (
//     <div>
//       <Chuyenanh />
//     </div>
//   );
// }
 
export default App;


