import { useState } from 'react';
import { ControlledForm } from './ControlledForm';
import { ControlledModal } from './ControlledModal';
import { UnControlledForm } from './UnControlledForm';
import OnboardingFlow from './OnboaringFlow/OnboaringFlow';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <UnControlledForm />

      <ControlledModal onRequestClose={() => setShowModal(false)} shouldShow={showModal}>
        <ControlledForm initialName="John" initialAge={30} initialHariColor="red" />
      </ControlledModal>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      <OnboardingFlow />
    </>
  )
}

export default App
