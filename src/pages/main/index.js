import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import './styles.css'
import Loading from '../../components/loading'

export default class Main extends Component{

    state = {
        products: [],
        productInfo: {},
        page: 1,
        showLoading: false
    }

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        this.setState({showLoading: true})
        await api.get(`/products?page=${page}`).then((response) => {
            const { docs, ...productInfo} = response.data
            
            this.setState({
                products: docs,
                productInfo,
                page,
                showLoading:false
            })
        });

    }

    prevPage = () => {
        const { page } = this.state;
        if(page === 1)
            return;
        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    }

    nextPage = () => {
        const { page, productInfo } = this.state;

        if( page === productInfo.pages)
            return;
        console.log('humm')
        const pageNumber = page + 1;
        this.loadProducts(pageNumber);
    }

    render(){
        const { products,page,productInfo } = this.state
        return (
            <React.Fragment>
                <Loading show={this.state.showLoading}/>
                <div className="product-list">
                    <h1>
                        Products : {this.state.products.length}
                    </h1>
                    {products.map(
                        product =>  (
                            <article key={product._id}>
                                <strong>{product.title}</strong>
                                <p>{product.description}</p>

                                <Link to={`/products/${product._id}`} >Acessar</Link>
                            </article>
                        )
                    )}
                    <div className="actions">
                            <button disabled={page=== 1} onClick={this.prevPage}>Anterior</button>
                            <button disabled={page=== productInfo.pages} onClick={this.nextPage}>Proximo</button>
                    </div>
                </div>
            </React.Fragment>
                
        )
    }
}