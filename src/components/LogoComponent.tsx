import logo from '../assets/logo.png'

const LogoComponent = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <img src={logo} alt="Logo" className="w-10" />
    </div>
  )
}

export default LogoComponent
