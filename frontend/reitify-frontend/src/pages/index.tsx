import React, { useState } from 'react';
import ReitList from '@/components/ReitList';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import Spinner from '@/components/Spinner';
import Alert from '@/components/Alert';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const handleAction = () => {
    setIsLoading(true);
    // Simulate an action
    setTimeout(() => {
      setIsLoading(false);
      setAlertMessage('Action completed successfully!');
      handleModalClose();
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">Welcome to Reitify</h1>
        <p className="text-center text-gray-600 mb-8">
          Discover the best REIT investments and manage your portfolio with ease.
        </p>

        {/* Alert Component */}
        {alertMessage && <Alert message={alertMessage} type="success" />}

        {/* Action Button to Open Modal */}
        <div className="text-center mb-8">
          <Button label="Get Started" onClick={handleModalOpen} />
        </div>

        {/* ReitList Component */}
        <ReitList />

        {/* Example Card Usage */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Manage Your Portfolio"
            content="Easily track and manage your REIT investments with our intuitive portfolio manager."
            footer={<Button label="Learn More" onClick={handleModalOpen} variant="secondary" />}
          />
          <Card
            title="Explore Market Data"
            content="Get insights and detailed analysis on the latest REIT market trends."
            footer={<Button label="Explore" onClick={handleModalOpen} variant="secondary" />}
          />
          <Card
            title="AI-Powered Predictions"
            content="Leverage AI to predict the best REIT investments tailored to your needs."
            footer={<Button label="Try Now" onClick={handleModalOpen} variant="secondary" />}
          />
        </div>

        {/* Modal Component */}
        <Modal isOpen={isModalOpen} onClose={handleModalClose}>
          <h2 className="text-xl font-semibold mb-4">Get Started with Reitify</h2>
          <p className="mb-4">Sign up to unlock all features and start managing your investments today.</p>
          <div className="flex justify-end space-x-4">
            <Button label="Cancel" onClick={handleModalClose} variant="secondary" />
            <Button label="Confirm" onClick={handleAction} />
          </div>
        </Modal>

        {/* Spinner Component */}
        {isLoading && <Spinner />}
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
