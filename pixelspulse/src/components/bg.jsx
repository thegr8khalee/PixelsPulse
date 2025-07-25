'use client';
import { cn } from '../lib/utils.jsx';
import { useEffect, useRef, useState } from 'react';

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = '97, 232, 255',
  gradientBackgroundEnd = '0, 7, 35',
  firstColor = '97, 232, 255',
  secondColor = '97, 232, 255',
  thirdColor = '250, 103, 255',
  fourthColor = '97, 232, 255',
  fifthColor = '97, 232, 255',
  pointerColor = '250, 103, 255',
  size = '80%',
  blendingValue = 'hard-light',
  children,
  className,
  interactive = true,
  containerClassName,
  pulseIntensity = 2, // New prop to control pulse strength
  pulseSpeed = 100, // New prop to control pulse speed (seconds per cycle)
}) => {
  const interactiveRef = useRef(null);
  const [pulseScale, setPulseScale] = useState(1);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
    document.body.style.setProperty(
      '--gradient-background-start',
      gradientBackgroundStart
    );
    document.body.style.setProperty(
      '--gradient-background-end',
      gradientBackgroundEnd
    );
    document.body.style.setProperty('--first-color', firstColor);
    document.body.style.setProperty('--second-color', secondColor);
    document.body.style.setProperty('--third-color', thirdColor);
    document.body.style.setProperty('--fourth-color', fourthColor);
    document.body.style.setProperty('--fifth-color', fifthColor);
    document.body.style.setProperty('--pointer-color', pointerColor);
    document.body.style.setProperty('--size', size);
    document.body.style.setProperty('--blending-value', blendingValue);
  }, []);

  // Pulse animation effect
  useEffect(() => {
    let animationFrameId;
    let startTime = null;

    const animatePulse = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000; // Convert to seconds

      // Calculate pulse scale using sine wave for smooth oscillation
      const pulse =
        1 + Math.sin((elapsed * (2 * Math.PI)) / pulseSpeed) * pulseIntensity;
      setPulseScale(pulse);

      animationFrameId = requestAnimationFrame(animatePulse);
    };

    animationFrameId = requestAnimationFrame(animatePulse);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [pulseIntensity, pulseSpeed]);

  useEffect(() => {
    function move() {
      if (!interactiveRef.current) {
        return;
      }
      setCurX(curX + (tgX - curX) / 20);
      setCurY(curY + (tgY - curY) / 20);
      interactiveRef.current.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
    }

    move();
  }, [tgX, tgY]);

  const handleMouseMove = (event) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
      className={cn(
        'w-full relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))] lg:pt-0',
        containerClassName
      )}
    >
      <svg className='hidden'>
        <defs>
          <filter id='blurMe'>
            <feGaussianBlur
              in='SourceGraphic'
              stdDeviation='10'
              result='blur'
            />
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8'
              result='goo'
            />
            <feBlend in='SourceGraphic' in2='goo' />
          </filter>
        </defs>
      </svg>
      <div className={cn('', className)}>{children}</div>
      <div
        className={cn(
          'absolute top-1/2 gradients-container h-full w-full blur-lg',
          isSafari ? 'blur-2xl' : '[filter:url(#blurMe)_blur(40px)]'
        )}
      >
        {/* Added pulse effect to each gradient circle */}
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:center_center]`,
            `animate-first`,
            `opacity-100`
          )}
          style={{ transform: `scale(${pulseScale})` }}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-400px)]`,
            `animate-second`,
            `opacity-100`
          )}
          style={{ transform: `scale(${1 + (pulseScale - 1) * 0.8})` }}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%+400px)]`,
            `animate-third`,
            `opacity-100`
          )}
          style={{ transform: `scale(${1 + (pulseScale - 1) * 0.6})` }}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-200px)]`,
            `animate-fourth`,
            `opacity-70`
          )}
          style={{ transform: `scale(${1 + (pulseScale - 1) * 0.4})` }}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
            `animate-fifth`,
            `opacity-100`
          )}
          style={{ transform: `scale(${1 + (pulseScale - 1) * 0.2})` }}
        ></div>

        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
              `opacity-70`
            )}
          ></div>
        )}
      </div>
    </div>
  );
};
