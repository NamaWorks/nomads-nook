export const licenseInitialState = {
  // license: "commercial",
  license: "personal",
  pricePerImage: 0,
  showCardInfo: false,
}

export const licenseReducer = (state, action) => {
  switch (action.type) {

    case 'personal':
      return action.params.setLicenseInfo({...state, license:'personal' , pricePerImage: 0, showCardInfo:false});
      
    case 'commercial':
        return action.params.setLicenseInfo({...state, license:'commercial' , pricePerImage: 99, showCardInfo: true});
        
    case 'extended':
          return action.params.setLicenseInfo({...state, license:'extended' , pricePerImage: 199, showCardInfo: true});

  }
}