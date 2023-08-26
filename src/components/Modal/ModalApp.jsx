import Modal from "./Modal";
import LargeProductList from '../Lists/Product/LargeProductList';
import {products} from '../Lists/data/Products';

const ModalApp = () => {
    return ( <Modal>
        <LargeProductList product={products[0]} />
    </Modal> );
}
 
export default ModalApp;