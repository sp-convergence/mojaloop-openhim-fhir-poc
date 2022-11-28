// Copyright 2022 Digital Convergence Initiative
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Util } from '@mojaloop/central-services-shared'
import Health from './health'
import Disbursement from './disbursement'
import DisbursementCheck from './disbursementCheck'
import GetDisbursement from './getDisbursement'

const OpenapiBackend = Util.OpenapiBackend

export default {
  HealthGet: Health.get,
  Disbursement: Disbursement.postDisbursement,
  DisbursementCheck: DisbursementCheck.disbursementCheck,
  GetDisbursement: GetDisbursement.getDisbursement,
  validationFail: OpenapiBackend.validationFail,
  notFound: OpenapiBackend.notFound,
  methodNotAllowed: OpenapiBackend.methodNotAllowed
}
