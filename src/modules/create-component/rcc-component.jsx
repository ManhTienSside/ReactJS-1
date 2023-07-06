import { Component } from 'react'
//rcc tao nhanh 1 class component
//quy uoc dat ten component phai viet hoa chu cai dau
//de dua ui len giao dien, thi phai de trong return 
//method render
export default class RccComponent extends Component {
    render() {
        return (
            <div>
                <h3>hello,this is class</h3>
                <button className='btn btn-success'>ClickMe</button>
            </div>
        )
    }
}

