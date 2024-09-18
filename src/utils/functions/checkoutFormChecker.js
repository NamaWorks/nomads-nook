export const checkoutFormChecker = (formObj) => {
  const { checkoutInformation } = formObj

  const { name } = checkoutInformation
  const { email } = checkoutInformation
  const { surname } = checkoutInformation
  const { conditions } = checkoutInformation

let requiredFields = {
  name: false,
  surname: false,
  email: false,
  conditions: false,
}

let activate = true

if(!(name == "")){
  requiredFields.name = true
}
if(!(surname == "")){
  requiredFields.surname = true
}

if(email){
  if(email.length>=5 && email.includes("@")){
    requiredFields.email = true
  }
}

if(conditions){
  requiredFields.conditions = true
}

let msg = []
for (const field in requiredFields) {
if(!requiredFields[field]){
  activate = false
  if(field == "conditions"){
    msg.push("you must accep the conditions of the service")
  } else {msg.push(`make sure you added a correct ${field}`)}
}
}
return {activate:activate, infoToDisplay:msg}
}