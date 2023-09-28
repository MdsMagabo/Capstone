import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProvinceList = () => {
  const [provinces, setProvinces] = useState([]);
  const [municipalities, setMunicipalities] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedMunicipality, setSelectedMunicipality] = useState('');

  useEffect(() => {
    axios.get('https://psgc.gitlab.io/api/provinces/')
      .then(response => {
        setProvinces(response.data);
      })
      .catch(error => {
        console.error('Error fetching provinces:', error);
      });
  }, []);

  const handleProvinceChange = (e) => {
    const selectedProvinceCode = e.target.value;
    setSelectedProvince(selectedProvinceCode);
    
    axios.get(`https://psgc.gitlab.io/api/provinces/${selectedProvinceCode}/municipalities`)
      .then(response => {
        setMunicipalities(response.data);
        setSelectedMunicipality(''); 
      })
      .catch(error => {
        console.error('Error fetching municipalities:', error);
      });
  };

  const handleMunicipalityChange = (e) => {
    setSelectedMunicipality(e.target.value);
  };

  return (
    <div className='province-container'>
       <div className='api-container'>
      <h2 className='text-api'>Select a Province</h2>
      <select className='select-api' value={selectedProvince} onChange={handleProvinceChange}>
        <option value="">Select a province</option>
        {provinces.map(province => (
          <option key={province.code} value={province.code}>
            {province.name}
          </option>
        ))}
      </select>

      <h2 className='text-api'>Select a Municipality</h2>
      <select className='select-api' value={selectedMunicipality} onChange={handleMunicipalityChange}>
        <option value="">Select a municipality</option>
        {municipalities.map(municipality => (
          <option key={municipality.code} value={municipality.name}>
            {municipality.name}
          </option>
        ))}
        
      </select>
      </div> 

      <div className="location">

        <div className="card">
          <h3>5J TYRE AND MAGS DEPOT</h3>
          <ul className="card-body">
            <li>Blk 110 Lot 9 Villa Vienna Subd Brgy. Greater Lagro, Quezon City,</li>
            <li>9:00AM to 5:00PM (MON-SAT)</li>
          </ul>
        </div>
        <div className="card">
             <h3>BUTING'S FIRST AUTO & TIRE SERVICE CENTER</h3>
             <ul className="card-body">
                <li> 90 San Guillermo St. Brgy. Buting, Pasig City, Metro Manila </li>
                <li> 8:30AM to 5:30PM</li>
             </ul>
            </div>
            <div className="card">
             <h3>DAVID R. BARROSO ELECTRICAL AND TIRE SERVICES</h3>
             <ul className="card-body">
                <li>Nat'L Highway Brgy. Canlalay, Biñan City, Laguna </li>
                <li> 9:00AM to 5:00PM</li>
             </ul>
            </div>
            <div className="card">
             <h3>KING-R TIRE SUPPLY TRADING</h3>
             <ul className="card-body">
                <li> Purok 3 Lalaan 2nd Brgy. Lalaan Ii, Silang, Cavite</li>
                <li> 7:00AM to 5:00PM </li>
             </ul>
            </div>
            <div className="card">
             <h3>SVB TIRE AND CAR ACCESSORIES</h3>
             <ul className="card-body">
                <li> Km78 Maharlika Highway Brgy. San Nicolas, San Pablo, Laguna</li>
                <li> 8:00AM to 5:00PM</li>
             </ul>
            </div>
            <div className="card">
             <h3>TSR ENTERPRISES</h3>
             <ul className="card-body">
                <li>MacArthur Highway Brgy. Gatbuca, Calumpit, Bulacan</li>
                <li>8:00AM to 5:00PM</li>
             </ul>
            </div>
            <div className="card">
             <h3>SAMJO TIRE SUPPLY</h3>
             <ul className="card-body">
                <li>Red-V, Maharlika Hway Brgy. Ibabang Dupay, Lucena City, Quezon</li>
                <li> 9:00AM to 5:00PM</li>
             </ul>
            </div>
            <div className="card">
             <h3>TRI-J MARKETING INC</h3>
             <ul className="card-body">
                <li> 380 N. Bacalso Ave., Guadalquiver Bldg. Brgy. Basak San Nicolas, Cebu City, Cebu</li>
                <li> 8:00AM to 5:00PM</li>
             </ul>
            </div>
            <div className="card">
             <h3>RC CAUDILLA TIRE SUPPLY</h3>
             <ul className="card-body">
                <li> Marcus Highway Brgy. Dela Paz, Pasig City, Metro Manila</li>
                <li> 7:00AM to 5:30PM</li>
             </ul>
            </div>
            <div className="card">
             <h3>ZERO D AUTO</h3>
             <ul className="card-body">
                <li> 554 R. Vicencio, cor L. Gonzales, Brgy. Hagdang Bato, Mandaluyong City, Metro Manila</li>
                <li> 8:00AM to 6:00PM </li>
             </ul>
            </div>
            <div className="card">
             <h3>WHEELCORE TIRES AND RIMS</h3>
             <ul className="card-body">
                <li> Gopiao Bldg., MacArthur Highway Brgy. Dolores, San Fernando, Pampanga</li>
                <li> 7:00AM to 6:00PM</li>
             </ul>
            </div>
            <div className="card">
             <h3>RC CAUDILLA TIRE SUPPL</h3>
             <ul className="card-body">
                <li> Marcus Highway Brgy. Dela Paz, Pasig City, Metro Manila</li>
                <li>7:00AM to 5:30PM</li>
             </ul>
            </div>
            <div className="card">
             <h3>DAVID R. BARROSO ELECTRICAL AND TIRE SERVICES</h3>
             <ul className="card-body">
                <li> Nat'L Highway Brgy. Canlalay, Biñan City, Laguna</li>
                <li> 9:00AM to 5:00PM</li>
             </ul>
            </div>
            <div className="card">
             <h3>A.R CARPIO TIRE SUPPLY</h3>
             <ul className="card-body">
                <li> 540 Quirino Highway, Talipapa Brgy. Novaliches Proper, Quezon City, Metro Manila </li>
                <li> 9:00AM to 5:00PM</li>
             </ul>
            </div>
            <div className="card">
             <h3>ADD GARBES SERVITEK</h3>
             <ul className="card-body">
                <li> 9 CBMU Upper Brgy. Kalaklan, Olongapo City, Zambales</li>
                <li> 9:00AM to 5:00PM</li>
             </ul>
            </div>
            <div className="card">
             <h3>EMELY'S TIRE CENTER</h3>
             <ul className="card-body">
                <li> Gapan-Olongapo Road Brgy. Alua, San Isidro, Nueva Ecija</li>
                <li> 9:00AM to 5:00PM</li>
             </ul>
            </div>
            <div className="card">
             <h3>HAILEY'S TIRE SHOP</h3>
             <ul className="card-body">
                <li> 1573 F Yuseco St Sta Cruz Brgy. 358, Manila, Metro Manila</li>
                <li> 9:00AM to 5:00PM</li>
             </ul>
            </div>
      </div>
    </div>
  );
};

export default ProvinceList;
