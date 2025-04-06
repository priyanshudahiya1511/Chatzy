import React from 'react';

const GenderCheckBox = ({ handleCheckBoxChange, selectedGender }) => {
  return (
    <div className='flex flex-wrap gap-4 mb-4'>
      {/* Male */}
      <label className={`flex items-center gap-2 cursor-pointer p-2 rounded-lg border transition 
        ${selectedGender === 'male' ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-400 text-gray-300 hover:border-blue-500'}`}>
        <input
          type='checkbox'
          checked={selectedGender === 'male'}
          onChange={() => handleCheckBoxChange('male')}
          className='checkbox checkbox-sm border-gray-400'
        />
        <span>Male</span>
      </label>

      {/* Female */}
      <label className={`flex items-center gap-2 cursor-pointer p-2 rounded-lg border transition 
        ${selectedGender === 'female' ? 'bg-pink-600 text-white border-pink-600' : 'border-gray-400 text-gray-300 hover:border-pink-500'}`}>
        <input
          type='checkbox'
          checked={selectedGender === 'female'}
          onChange={() => handleCheckBoxChange('female')}
          className='checkbox checkbox-sm border-gray-400'
        />
        <span>Female</span>
      </label>
    </div>
  );
};

export default GenderCheckBox;
