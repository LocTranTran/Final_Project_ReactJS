import React, { useState, useEffect } from "react";
import axios from "axios";
import './ProvinceSelect.scss'
const ProvinceSelect = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [wards, setWards] = useState([]);
  const [selectedWard, setSelectedWard] = useState("");
  const [result, setResult] = useState("");
const [inputValue, setInputValue] = useState("");

const handleChange = (event) => {
  setInputValue(event.target.value);
};
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://provinces.open-api.vn/api/?depth=1"
        );
        setCities(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleCityChange = async (event) => {
    const cityCode = event.target.value;
    setSelectedCity(cityCode);
    setSelectedDistrict("");
    setSelectedWard("");
    setResult("");

    try {
      const response = await axios.get(
        `https://provinces.open-api.vn/api/p/${cityCode}?depth=2`
      );
      setDistricts(response.data.districts);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDistrictChange = async (event) => {
    const districtCode = event.target.value;
    setSelectedDistrict(districtCode);
    setSelectedWard("");
    setResult("");

    try {
      const response = await axios.get(
        `https://provinces.open-api.vn/api/d/${districtCode}?depth=2`
      );
      setWards(response.data.wards);
    } catch (error) {
      console.log(error);
    }
  };

  const handleWardChange = (event) => {
    const wardCode = event.target.value;
    setSelectedWard(wardCode);
    setResult("");
  };

  // const printResult = () => {
  //   if (selectedCity && selectedDistrict && selectedWard) {
  //     const city = cities.find((c) => c.code === selectedCity);
  //     const district = districts.find((d) => d.code === selectedDistrict);
  //     const ward = wards.find((w) => w.code === selectedWard);

  //     const resultText = `${city.name} | ${district.name} | ${ward.name}`;
  //     setResult(resultText);
  //   }
  // };

  return (
    <>
      <div className="province">
        <select
          className="province-select"
          value={selectedCity}
          onChange={handleCityChange}
        >
          <option className="province-select-option" value="">
            Chọn tỉnh thành
          </option>
          {cities.map((city) => (
            <option key={city.code} value={city.code}>
              {city.name}
            </option>
          ))}
        </select>

        <select
          className="province-select"
          value={selectedDistrict}
          onChange={handleDistrictChange}
        >
          <option className="province-option" value="">
            Chọn quận huyện
          </option>
          {districts.map((district) => (
            <option key={district.code} value={district.code}>
              {district.name}
            </option>
          ))}
        </select>

        <select
          className="province-select"
          value={selectedWard}
          onChange={handleWardChange}
        >
          <option className="province-option" value="">
            Chọn phường xã
          </option>
          {wards.map((ward) => (
            <option key={ward.code} value={ward.code}>
              {ward.name}
            </option>
          ))}
        </select>

        <h2>{result}</h2>
      </div>
      <div className="province-input">
        <input value={inputValue} onChange={handleChange} />
      </div>
    </>
  );
};

export default ProvinceSelect;
