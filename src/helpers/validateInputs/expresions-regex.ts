const expresionsRegex = {
  email: new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ),
  password: new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})/),
  name: new RegExp(/^[a-z ,.'-]+$/i)
}

const messageRegex = {
  email: 'Format email not valid.',
  password: 'Format password not valid [0-9a-zA-Z]',
  name: 'Format name not valid',
}

export { expresionsRegex, messageRegex }
