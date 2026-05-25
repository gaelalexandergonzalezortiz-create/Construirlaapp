import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import AccountSelection from './components/AccountSelection';
import HomeCliente from './components/HomeCliente';
import NailBuilder from './components/NailBuilder';
import ManicuristaList from './components/ManicuristaList';
import ManicuristaProfile from './components/ManicuristaProfile';
import Reserva from './components/Reserva';
import DashboardManicurista from './components/DashboardManicurista';
import PerfilManicuristaEdit from './components/PerfilManicuristaEdit';
import MensajesManicurista from './components/MensajesManicurista';
import CalendarioManicurista from './components/CalendarioManicurista';
import MensajesCliente from './components/MensajesCliente';
import CitasCliente from './components/CitasCliente';
import PerfilCliente from './components/PerfilCliente';

type Screen =
  | 'welcome'
  | 'account-selection'
  | 'home-cliente'
  | 'nail-builder'
  | 'manicurista-list'
  | 'manicurista-profile'
  | 'reserva'
  | 'dashboard-manicurista'
  | 'perfil-manicurista-edit'
  | 'mensajes-manicurista'
  | 'calendario-manicurista'
  | 'mensajes-cliente'
  | 'citas-cliente'
  | 'perfil-cliente';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');

  const navigate = (screen: string) => {
    setCurrentScreen(screen as Screen);
  };

  return (
    <div className="w-full h-screen">
      {currentScreen === 'welcome' && <WelcomeScreen onNavigate={navigate} />}
      {currentScreen === 'account-selection' && <AccountSelection onNavigate={navigate} />}
      {currentScreen === 'home-cliente' && <HomeCliente onNavigate={navigate} />}
      {currentScreen === 'nail-builder' && <NailBuilder onNavigate={navigate} />}
      {currentScreen === 'manicurista-list' && <ManicuristaList onNavigate={navigate} />}
      {currentScreen === 'manicurista-profile' && <ManicuristaProfile onNavigate={navigate} />}
      {currentScreen === 'reserva' && <Reserva onNavigate={navigate} />}
      {currentScreen === 'dashboard-manicurista' && <DashboardManicurista onNavigate={navigate} />}
      {currentScreen === 'perfil-manicurista-edit' && <PerfilManicuristaEdit onNavigate={navigate} />}
      {currentScreen === 'mensajes-manicurista' && <MensajesManicurista onNavigate={navigate} />}
      {currentScreen === 'calendario-manicurista' && <CalendarioManicurista onNavigate={navigate} />}
      {currentScreen === 'mensajes-cliente' && <MensajesCliente onNavigate={navigate} />}
      {currentScreen === 'citas-cliente' && <CitasCliente onNavigate={navigate} />}
      {currentScreen === 'perfil-cliente' && <PerfilCliente onNavigate={navigate} />}
    </div>
  );
}