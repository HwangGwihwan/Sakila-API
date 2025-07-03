import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './component/Home';
import Country from './component/Country';
import Address from './component/Address';
import City from './component/City';
import Customer from './component/Customer';
import CountryOne from './component/CountryOne';
import AddCountry from './component/AddCountry';
import CityOne from './component/CityOne';
import AddCity from './component/AddCity';
import AddressOne from './component/AddressOne';
import AddAddress from './component/AddAddress';
import CustomerOne from './component/CustomerOne';
import AddCustomer from './component/AddCustomer';

export default function App() {

    return (
        <BrowserRouter>
            <div>
                {/* header */}
                <h1 className='text-green-300'>Sakila Project</h1>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/Country">country</Link></li>
                    <li><Link to="/City">City</Link></li>
                    <li><Link to="/Address">Address</Link></li>
                    <li><Link to="/Customer">Customer</Link></li>
                </ul>
                <hr />

                {/* content ------------------------------------- */}

                <Routes>
                    <Route path='/' element={<Home />} /> {/* 라우터 > 컴포넌드 */}

                    {/* country curd */}
                    <Route path='/Country' element={<Country />} />
                    <Route path='/CountryOne/:countryId' element={<CountryOne />} />
                    <Route path='/AddCountry' element={<AddCountry />} />

                    {/* city curd */}
                    <Route path='/City' element={<City />} />
                    <Route path='/CityOne/:cityId' element={<CityOne />} />
                    <Route path='/AddCity/:countryId' element={<AddCity />} />
                    
                    {/* address curd */}
                    <Route path='/Address' element={<Address />} />
                    <Route path='/AddressOne/:addressId' element={<AddressOne />} />
                    <Route path='/AddAddress/:cityId' element={<AddAddress />} />

                    {/* customer curd */}
                    <Route path='/Customer' element={<Customer />} />
                    <Route path='/CustomerOne/:customerId' element={<CustomerOne />} />
                    <Route path='/AddCustomer/:addressId' element={<AddCustomer />} />
                    
                </Routes>

                {/* ----------------------------------------- */}


                {/* footer */}
                <hr />
                <div>
                    Copyright@ GDJ91.
                </div>
            </div>
        </BrowserRouter>
    );
}

