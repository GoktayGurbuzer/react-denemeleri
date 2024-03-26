import { createElement, useState } from 'react';
import Button from './components/Button';
import Tab from './components/Tab';
import './output.css'

function App() {
 const [activeTab, setActiveTab] = useState(1);
  return (
    <>
    <div style={{ padding: 20 }}>
      <button onClick={() => setActiveTab(2)}>Aktif Tabı Değiştir</button>
      <Tab activeTab={activeTab} setActiveTab={setActiveTab}>
        <Tab.Panel title="Profil">1. Tab</Tab.Panel>
        <Tab.Panel title="Hakkında">2. Tab</Tab.Panel>
        <Tab.Panel title="Ayarlar">3. Tab</Tab.Panel>
      </Tab>
      {activeTab === 0 && (
        <div>
          <h2 className='font-semibold'>Profil</h2>
          <p className='p-2'>Burası Profil Sayfası</p>
        </div>
      )}

      {activeTab === 1 && (
        <div>
          <p className='p-2 font-semibold'>Burası Hakkında Sayfası</p>
        </div>
      )}

      {activeTab === 2 && (
        <div>
          <p className='p-2 font-semibold'>Burası Ayarlar Sayfası</p>
        </div>
      )}
    </div>
    <div style={{ padding: 20 }}>
      <Button>Buton Örneği</Button>
      <Button variant="success">Buton Örneği</Button>
      <Button variant="danger">Buton Örneği</Button>
      <Button variant="warning">Buton Örneği</Button>
    </div>
    </>
  )
}

export default App;
