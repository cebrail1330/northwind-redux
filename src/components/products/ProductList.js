import React, {Component} from 'react';
import {Badge} from "reactstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as productActions from "../../redux/actions/productActions";
import {Table, Button} from 'reactstrap';
import * as cartActions  from "../../redux/actions/cartActions";
import alertify from "alertifyjs"

class ProductList extends Component {

    componentDidMount() {
        this.props.actions.getProducts();
    }

    addToCart=(product)=>{
        this.props.actions.addToCart({quantity:1, product})
        alertify.success(product.productName + " sepete eklendi")
    }

    render() {
        return (
            <div>
                <h3><Badge>Products</Badge>
                    <Badge color="success">{this.props.currentCategory.categoryName}</Badge></h3>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity Per Unit</th>
                            <th>Units in Stock</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.products.map(product=>(
                        <tr key={product.id}>
                            <th scope="row">{product.id}</th>
                            <td>{product.productName}</td>
                            <td>{product.unitPrice}</td>
                            <td>{product.quantityPerUnit}</td>
                            <td><Button onClick={()=>this.addToCart(product)}>Add</Button></td>
                        </tr>
                    ))}

                    </tbody>
                </Table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        products: state.productListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProducts: bindActionCreators(productActions.getProducts, dispatch),
            addToCart:bindActionCreators(cartActions.addToCart, dispatch),
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
