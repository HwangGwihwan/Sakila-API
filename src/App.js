import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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
import EditCountry from './component/EditCountry';
import EditCity from './component/EditCity';
import EditAddress from './component/EditAddress';
import EditCustomer from './component/EditCustomer';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">

        {/* Header */}
        <header className="bg-indigo-600 text-white py-4 shadow-md">
          <h1 className="text-3xl font-bold text-center">Sakila Project</h1>
        </header>

        {/* Navigation */}
        <nav className="bg-white shadow px-4 py-5">
          <ul className="flex flex-wrap justify-center gap-4">
            <li>
              <Link to="/" className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Country" className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded">
                Country
              </Link>
            </li>
            <li>
              <Link to="/City" className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded">
                City
              </Link>
            </li>
            <li>
              <Link to="/Address" className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded">
                Address
              </Link>
            </li>
            <li>
              <Link to="/Customer" className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded">
                Customer
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="flex-1 container mx-auto px-4 py-6">
          <Routes>
            <Route path='/' element={<Home />} />

            {/* Country CRUD */}
            <Route path='/Country' element={<Country />} />
            <Route path='/CountryOne/:countryId' element={<CountryOne />} />
            <Route path='/AddCountry' element={<AddCountry />} />
            <Route path='/EditCountry/:countryId' element={<EditCountry />} />

            {/* City CRUD */}
            <Route path='/City' element={<City />} />
            <Route path='/CityOne/:cityId' element={<CityOne />} />
            <Route path='/AddCity/:countryId' element={<AddCity />} />
            <Route path='/EditCity/:cityId' element={<EditCity />} />

            {/* Address CRUD */}
            <Route path='/Address' element={<Address />} />
            <Route path='/AddressOne/:addressId' element={<AddressOne />} />
            <Route path='/AddAddress/:cityId' element={<AddAddress />} />
            <Route path='/EditAddress/:addressId' element={<EditAddress />} />

            {/* Customer CRUD */}
            <Route path='/Customer' element={<Customer />} />
            <Route path='/CustomerOne/:customerId' element={<CustomerOne />} />
            <Route path='/AddCustomer/:addressId' element={<AddCustomer />} />
            <Route path='/EditCustomer/:customerId' element={<EditCustomer />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-200 py-4 text-center text-sm text-gray-600">
          Copyright &copy; GDJ91
        </footer>

      </div>
    </BrowserRouter>
  );
}
