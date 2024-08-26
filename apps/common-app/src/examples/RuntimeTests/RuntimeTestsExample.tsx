import React from 'react';
import RuntimeTestsRunner from './ReJest/RuntimeTestsRunner';
import { describe } from './ReJest/RuntimeTestsApi';

export default function RuntimeTestsExample() {
  return (
    <RuntimeTestsRunner
      tests={[
        {
          testSuiteName: 'animations',
          importTest: () => {
            describe('*****withTiming***** ⏰', () => {
              require('./tests/animations/withTiming/arrays.test');
              require('./tests/animations/withTiming/basic.test');
              require('./tests/animations/withTiming/objects.test');
              require('./tests/animations/withTiming/colors.test');
              require('./tests/animations/withTiming/easing.test');
              require('./tests/animations/withTiming/transformMatrices.test');
            });
            describe('*****withSpring*****', () => {
              require('./tests/animations/withSpring/variousConfig.test');
            });
            describe('*****withDecay*****', () => {
              require('./tests/animations/withDecay/basic.test');
            });
            describe('*****withSequence*****', () => {
              require('./tests/animations/withSequence/callbackCascade.test');
              require('./tests/animations/withSequence/cancelAnimation.test');
              require('./tests/animations/withSequence/numbers.test');
              require('./tests/animations/withSequence/arrays.test');
              require('./tests/animations/withSequence/colors.test');
            });
            describe('*****withDelay*****', () => {
              require('./tests/animations/withDelay/keepSnapshot.test');
              require('./tests/animations/withDelay/addDelays.test');
            });
          },
        },
        {
          testSuiteName: 'core',
          importTest: () => {
            require('./tests/core/cancelAnimation.test');
            require('./tests/core/useSharedValue.test');
            require('./tests/core/useAnimatedStyle/reuseAnimatedStyle.test');
            require('./tests/core/useDerivedValue/basic.test');
            require('./tests/core/useDerivedValue/chain.test');
          },
        },
        {
          testSuiteName: 'utilities',
          importTest: () => {
            require('./tests/utilities/relativeCoords.test');
          },
        },
        {
          testSuiteName: 'layoutAnimations',
          importTest: () => {
            require('./tests/layoutAnimations/entering/enteringColors.test');
            require('./tests/layoutAnimations/entering/predefinedEntering.test');
            require('./tests/layoutAnimations/exiting/predefinedExiting.test');
            describe('Compare layout transitions with **constant view size** with snapshots', () => {
              require('./tests/layoutAnimations/layout/predefinedLayoutPosition.test');
            });
            describe('Compare Test layout transitions including view **size changes** with snapshots', () => {
              require('./tests/layoutAnimations/layout/positionAndSize.test');
            });
          },
        },
        {
          testSuiteName: 'advanced API',
          importTest: () => {
            require('./tests/advancedAPI/useFrameCallback.test');
            require('./tests/advancedAPI/measure.test');
          },
        },
        {
          testSuiteName: 'babel plugin',
          importTest: () => {
            require('./tests/plugin/fileWorkletization.test');
            require('./tests/plugin/contextObjects.test');
            require('./tests/plugin/workletClasses.test');
          },
        },
        {
          skipByDefault: true,
          testSuiteName: 'self-tests',
          importTest: () => {
            require('./tests/TestsOfTestingFramework.test');
          },
        },
      ]}
    />
  );
}
