import React, { useState, useEffect } from 'react';
import { CheckCircle, Mail, ArrowLeft, Home, Loader2 } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { useNewstellerStore } from '../store/use.newsteller';

const UnsubscribeSuccess = () => {
  const { registerToNewsteller, isLoading } = useNewstellerStore();
  const params = useParams();
  const email = params.email;
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setShowDetails(true), 500);
    return () => clearTimeout(timer);
  }, []);

  //   const handleGoBack = () => {
  //     window.history.back()
  //   }

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleSubscribe = () => {
    registerToNewsteller({ email });
  };

  if (isLoading) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-base-100'>
        <Loader2 className='animate-spin mr-2 h-8 w-8 text-gray-500' />
        <p className='text-gray-500'>Loading...</p>
      </div>
    );
  }

  return (
    <div className='py-20 min-h-screen bg-gradient-to-br from-base-100 to-accent-100 flex items-center justify-center p-4'>
      <div
        className={`max-w-md w-full bg-base-300 rounded-2xl shadow-xl p-8 text-center transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        {/* Success Icon */}
        <div className='relative mb-6'>
          <div className='w-20 h-20 bg-accent/10 rounded-full mx-auto flex items-center justify-center'>
            <CheckCircle
              className={`w-12 h-12 text-accent transition-all duration-500 ${
                isVisible ? 'scale-100' : 'scale-0'
              }`}
            />
          </div>
          <div className='absolute inset-0 w-20 h-20 bg-accent/20 rounded-full mx-auto animate-ping opacity-20'></div>
        </div>

        {/* Main Message */}
        <h1 className='text-2xl font-bold font-[poppins] mb-3'>
          Successfully Unsubscribed!
        </h1>

        <p className='text-gray-300 font-[montserrat] mb-6 leading-relaxed'>
          You've been removed from our mailing list. We're sorry to see you go,
          but we respect your choice.
        </p>

        {/* Additional Details */}
        <div
          className={`transition-all duration-500 ${
            showDetails ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
          } overflow-hidden`}
        >
          <div className='bg-white rounded-lg p-4 mb-6'>
            <div className='flex items-center justify-center mb-2'>
              <Mail className='w-5 h-5 text-base-100 mr-2' />
              <span className='text-sm font-medium text-base-100'>
                What happens next?
              </span>
            </div>
            <p className='text-sm text-base-100'>
              You may receive 1-2 more emails as they were already scheduled.
              After that, you won't hear from us again.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className='space-y-3'>
          <button
            onClick={handleGoHome}
            className='w-full bg-primary to-primary-10 hover:from-primary-20 hover:to-primary-30 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-center'
          >
            <Home className='w-4 h-4 mr-2' />
            Return to Homepage
          </button>

          {/* <button
            onClick={handleGoBack}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </button> */}
        </div>

        {/* Footer Message */}
        <div className='mt-8 pt-6 border-t border-gray-100'>
          <p className='text-xs text-gray-500'>
            Changed your mind? You can always{' '}
            <button
              onClick={() => handleSubscribe()}
              className='text-primary hover:text-primary-700 underline font-medium'
            >
              resubscribe here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnsubscribeSuccess;
