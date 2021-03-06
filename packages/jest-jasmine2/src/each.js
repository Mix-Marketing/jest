/**
 * Copyright (c) 2018-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import type {Environment} from 'types/Environment';

import {bind as bindEach} from 'jest-each';

export default (environment: Environment): void => {
  environment.global.it.each = bindEach(environment.global.it);
  environment.global.fit.each = bindEach(environment.global.fit);
  environment.global.xit.each = bindEach(environment.global.xit);
  environment.global.describe.each = bindEach(environment.global.describe);
  environment.global.xdescribe.each = bindEach(environment.global.xdescribe);
  environment.global.fdescribe.each = bindEach(environment.global.fdescribe);
};
