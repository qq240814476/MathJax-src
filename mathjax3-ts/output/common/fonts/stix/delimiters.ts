/*************************************************************
 *
 *  Copyright (c) 2018 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import {DelimiterMap, V, H} from '../../FontData.js';

export const HDW1 = [-0.127, .177, 0];
export const HDW2 = [.547, .041, .926];
export const HDW3 = [.662, .154, .511];
export const HDW4 = [.662, .156, .511];
export const HDW5 = [.818, .311, 0];
export const HDW6 = [.973, .259, .685];
export const VSIZES1 = [.311, .56, .979, 1.46, 1.886, 2.328];
export const VSIZES2 = [.33, .56, .979, 1.46, 1.886, 2.328];
export const VSIZES3 = [.436, .871, 1.308, 1.744, 2.18, 3];
export const VSIZES4 = [.926, 1.23, 1.35, 1.845, 2.46, 3.075];
export const VSIZES5 = [.932, 1.23, 1.845, 2.46, 3.075];
export const VSIZES6 = [1, .925, 1.46, 1.886, 2.328, 3.238];
export const VSIZES7 = [1.022, 1.451];
export const VSIZES8 = [1.144, 2.269];
export const VSIZES9 = [1.232, 1.847, 2.46, 3.075];

const DELIM2F = {c: 0x2F, dir: V, sizes: [.69, 1.23, 1.845, 2.46, 3.075]};
const DELIM2C6 = {c: 0x2C6, dir: H, sizes: VSIZES1};
const DELIM2DC = {c: 0x2DC, dir: H, sizes: VSIZES2};
const DELIM2190 = {c: 0x2190, dir: H, sizes: [.786], stretch: [0x2190, 0x2212], HDW: HDW2};
const DELIM2192 = {c: 0x2192, dir: H, sizes: [.786], stretch: [0, 0x2212, 0x2192], HDW: HDW2};
const DELIM2194 = {c: 0x2194, dir: H, sizes: [.85], stretch: [0x2190, 0x2212, 0x2192], HDW: HDW2};
const DELIM21A4 = {c: 0x21A4, dir: H, sizes: [.787], stretch: [0x2190, 0x23AF, 0x27DE], HDW: [.286, -0.22, .926]};
const DELIM21A6 = {c: 0x21A6, dir: H, sizes: [.787], stretch: [0x27DD, 0x23AF, 0x2192], HDW: [.286, -0.22, .926]};
const DELIM21D0 = {c: 0x21D0, dir: H, sizes: [.806], stretch: [0x21D0, 0xE01F], HDW: [.386, -0.12, .926]};
const DELIM21D2 = {c: 0x21D2, dir: H, sizes: [.806], stretch: [0, 0xE01F, 0x21D2], HDW: [.386, -0.12, .926]};
const DELIM21D4 = {c: 0x21D4, dir: H, sizes: [.886], stretch: [0x21D0, 0xE01F, 0x21D2], HDW: [.386, -0.12, .926]};
const DELIM2223 = {c: 0x2223, dir: V, sizes: [.879], stretch: [0, 0x2223], HDW: [.69, .189, .266]};
const DELIM23AF = {c: 0x23AF, dir: H, sizes: [.315], stretch: [0, 0x23AF], HDW: [.286, -0.22, .315]};
const DELIM23DC = {c: 0x23DC, dir: H, sizes: [1, .926, 1.46, 1.886, 2.328, 3.237], stretch: [0xE02D, 0xE028, 0xE02E], HDW: [.663, .155, 1]};
const DELIM23DD = {c: 0x23DD, dir: H, sizes: [1, .926, 1.46, 1.886, 2.328, 3.237], stretch: [0xE02F, 0xE02B, 0xE030], HDW: [.662, .156, 1]};
const DELIM23DE = {c: 0x23DE, dir: H, sizes: VSIZES6, stretch: [0xE031, 0xE028, 0xE033, 0xE032], HDW: [.663, .155, 1]};
const DELIM23DF = {c: 0x23DF, dir: H, sizes: VSIZES6, stretch: [0xE034, 0xE02B, 0xE036, 0xE035], HDW: [.662, .156, 1]};
const DELIM27E8 = {c: 0x27E8, dir: V, sizes: [.926, 1.23, 1.845, 2.46, 3.075]};
const DELIM27E9 = {c: 0x27E9, dir: V, sizes: [.926, 1.23, 1.845, 2.46, 3.075]};
const DELIM2906 = {c: 0x2906, dir: H, sizes: [.816], stretch: [0x21D0, 0x3D, 0x2AE4], HDW: [.386, -0.02, .926]};
const DELIM2907 = {c: 0x2907, dir: H, sizes: [.816], stretch: [0x22A8, 0x3D, 0x21D2], HDW: [.386, -0.02, .926]};


export const delimiters: DelimiterMap = {
  0x28: {dir: V, sizes: [.853, 1.23, 1.845, 2.46, 3.075], stretch: [0xE002, 0xE001, 0xE000], HDW: [.676, .177, 1.184]},
  0x29: {dir: V, sizes: [.853, 1.23, 1.845, 2.46, 3.075], stretch: [0xE005, 0xE004, 0xE003], HDW: [.676, .177, .926]},
  0x2D: DELIM23AF,
  0x2F: DELIM2F,
  0x3D: {dir: H, sizes: [.589], stretch: [0, 0x3D], HDW: [.386, -0.02, .685]},
  0x5B: {dir: V, sizes: [.818, 1.23, 1.845, 2.46, 3.075], stretch: [0xE008, 0xE007, 0xE006], HDW: [.662, .156, .45]},
  0x5C: {dir: V, sizes: [.69, 1.23, 1.845, 2.46, 3.075]},
  0x5D: {dir: V, sizes: [.818, 1.23, 1.845, 2.46, 3.075], stretch: [0xE00B, 0xE00A, 0xE009], HDW: [.662, .156, .685]},
  0x5E: DELIM2C6,
  0x5F: DELIM23AF,
  0x7B: {dir: V, sizes: [.861, 1.23, 1.845, 2.46, 3.075], stretch: [0xE00F, 0xE00D, 0xE00C, 0xE00E], HDW: [.68, .181, .64]},
  0x7C: {dir: V, sizes: [.69], stretch: [0, 0x7C, 0x7C], HDW: [.69, .189, .32]},
  0x7D: {dir: V, sizes: [.861, 1.23, 1.845, 2.46, 3.075], stretch: [0xE012, 0xE00D, 0xE010, 0xE011], HDW: [.68, .181, .64]},
  0x7E: DELIM2DC,
  0xAF: DELIM23AF,
  0x2C6: DELIM2C6,
  0x2C7: {dir: H, sizes: VSIZES1},
  0x2C9: DELIM23AF,
  0x2CD: {dir: H, sizes: [.312], stretch: [0, 0x2CD], HDW: [-0.104, .159, .334]},
  0x2DC: DELIM2DC,
  0x2F7: {dir: H, sizes: VSIZES2},
  0x302: {dir: H, sizes: VSIZES1},
  0x303: {dir: H, sizes: VSIZES2},
  0x305: {dir: H, sizes: [.5, 1, 1.5, 2, 2.5, 3], stretch: [0xE013, 0xE013], HDW: [.82, -0.77, 0]},
  0x30C: {dir: H, sizes: VSIZES1},
  0x330: {dir: H, sizes: VSIZES2},
  0x332: {dir: H, sizes: [.5, 1, 1.5, 2, 2.5, 3], stretch: [0xE014, 0xE014], HDW: HDW1},
  0x338: {dir: V, sizes: [.818, .553, .662, .818, .959, 1.414]},
  0x2015: DELIM23AF,
  0x2016: {dir: V, sizes: [.879], stretch: [0, 0x2016, 0x2016], HDW: [.69, .189, .523]},
  0x2017: DELIM23AF,
  0x203E: {dir: H, sizes: [.5, 1, 1.5, 2, 2.5, 3], stretch: [0x203E, 0x203E], HDW: [.82, -0.77, .5]},
  0x20D0: {dir: H, sizes: VSIZES3, stretch: [0xE015, 0xE016], HDW: HDW5},
  0x20D1: {dir: H, sizes: VSIZES3, stretch: [0, 0xE016, 0xE017], HDW: HDW5},
  0x20D6: {dir: H, sizes: [.436, .872, 1.308, 1.744, 2.18, 3], stretch: [0xE018, 0xE016], HDW: HDW5},
  0x20D7: {dir: H, sizes: [.436, .872, 1.308, 1.744, 2.18, 3], stretch: [0, 0xE016, 0xE019], HDW: HDW5},
  0x20E1: {dir: H, sizes: [.478], stretch: [0xE018, 0xE016, 0xE019], HDW: HDW5},
  0x20EC: {dir: H, sizes: VSIZES3, stretch: [0, 0xE01A, 0xE01B], HDW: HDW1},
  0x20ED: {dir: H, sizes: VSIZES3, stretch: [0xE01C, 0xE01A], HDW: HDW1},
  0x20EE: {dir: H, sizes: [.436, .872, 1.308, 1.744, 2.18, 3], stretch: [0xE01D, 0xE01A], HDW: HDW1},
  0x20EF: {dir: H, sizes: [.436, .872, 1.308, 1.744, 2.18, 3], stretch: [0, 0xE01A, 0xE01E], HDW: HDW1},
  0x2140: {dir: V, sizes: [1.022, 1.45]},
  0x2190: DELIM2190,
  0x2191: {dir: V, sizes: [.818], stretch: [0x2191, 0x23D0], HDW: HDW4},
  0x2192: DELIM2192,
  0x2193: {dir: V, sizes: [.818], stretch: [0, 0x23D0, 0x2193], HDW: HDW4},
  0x2194: DELIM2194,
  0x2195: {dir: V, sizes: [.954], stretch: [0x2191, 0x23D0, 0x2193], HDW: [.73, .224, .511]},
  0x219E: {dir: H, sizes: [.786], stretch: [0x219E, 0x2212], HDW: HDW2},
  0x219F: {dir: V, sizes: [.816], stretch: [0x219F, 0x23D0], HDW: HDW3},
  0x21A0: {dir: H, sizes: [.786], stretch: [0, 0x2212, 0x21A0], HDW: HDW2},
  0x21A1: {dir: V, sizes: [.816], stretch: [0, 0x23D0, 0x21A1], HDW: HDW3},
  0x21A4: DELIM21A4,
  0x21A5: {dir: V, sizes: [.816], stretch: [0x2191, 0x23D0, 0x5F], HDW: HDW3},
  0x21A6: DELIM21A6,
  0x21A7: {dir: V, sizes: [.816], stretch: [0x22A4, 0x23D0, 0x2193], HDW: HDW3},
  0x21A8: {dir: V, sizes: [.816], stretch: [0x2191, 0x23D0, 0x2913], HDW: HDW3},
  0x21A9: {dir: H, sizes: [.786], stretch: [0x2190, 0x2212, 0xE0B5], HDW: HDW2},
  0x21AA: {dir: H, sizes: [.786], stretch: [0xE0B4, 0x2212, 0x2192], HDW: HDW2},
  0x21B0: {dir: V, sizes: [.818], stretch: [0x21B0, 0x23D0], HDW: HDW4},
  0x21B1: {dir: V, sizes: [.818], stretch: [0x21B1, 0x23D0], HDW: HDW4},
  0x21B2: {dir: V, sizes: [.816], stretch: [0, 0x23D0, 0x21B2], HDW: HDW3},
  0x21B3: {dir: V, sizes: [.816], stretch: [0, 0x23D0, 0x21B3], HDW: HDW3},
  0x21B4: {dir: H, sizes: [.786], stretch: [0, 0x2212, 0x21B4], HDW: HDW2},
  0x21B5: {dir: V, sizes: [.818], stretch: [0, 0x23D0, 0x21B5], HDW: HDW4},
  0x21BC: {dir: H, sizes: [.847], stretch: [0x21BC, 0x23AF], HDW: [.286, -0.22, .955]},
  0x21BD: {dir: H, sizes: [.847], stretch: [0x21BD, 0x23AF], HDW: [.286, -0.22, .955]},
  0x21BE: {dir: V, sizes: [.818], stretch: [0x21BE, 0x23D0], HDW: HDW4},
  0x21BF: {dir: V, sizes: [.818], stretch: [0x21BF, 0x23D0], HDW: HDW4},
  0x21C0: {dir: H, sizes: [.847], stretch: [0, 0x23AF, 0x21C0], HDW: [.286, -0.22, .955]},
  0x21C1: {dir: H, sizes: [.847], stretch: [0, 0x2212, 0x21C1], HDW: [.547, .041, .955]},
  0x21C2: {dir: V, sizes: [.818], stretch: [0, 0x23D0, 0x21C2], HDW: HDW4},
  0x21C3: {dir: V, sizes: [.818], stretch: [0, 0x23D0, 0x21C3], HDW: HDW4},
  0x21CB: {dir: H, sizes: [.786], stretch: [0x296A, 0x3D, 0x296D], HDW: [.386, -0.02, .926]},
  0x21CC: {dir: H, sizes: [.786], stretch: [0x296B, 0x3D, 0x296C], HDW: [.386, -0.02, .926]},
  0x21D0: DELIM21D0,
  0x21D1: {dir: V, sizes: [.818], stretch: [0x21D1, 0xE020], HDW: [.662, .156, .686]},
  0x21D2: DELIM21D2,
  0x21D3: {dir: V, sizes: [.818], stretch: [0, 0xE020, 0x21D3], HDW: [.662, .156, .686]},
  0x21D4: DELIM21D4,
  0x21D5: {dir: V, sizes: [.954], stretch: [0x21D1, 0xE020, 0x21D3], HDW: [.73, .224, .686]},
  0x21DA: {dir: H, sizes: [.806], stretch: [0x21DA, 0xE021], HDW: [.486, -0.02, .926]},
  0x21DB: {dir: H, sizes: [.806], stretch: [0, 0xE021, 0x21DB], HDW: [.486, -0.02, .926]},
  0x21E0: {dir: H, sizes: [.806], stretch: [0x21E0, 0xE121], HDW: [.29, -0.217, .926]},
  0x21E1: {dir: V, sizes: [.818], stretch: [0x21E1, 0xE12D], HDW: HDW4},
  0x21E2: {dir: H, sizes: [.806], stretch: [0, 0xE12E, 0x21E2], HDW: [.29, -0.217, .926]},
  0x21E3: {dir: V, sizes: [.818], stretch: [0, 0xE12C, 0x21E3], HDW: HDW4},
  0x21E4: {dir: H, sizes: [.806], stretch: [0x21E4, 0x2212], HDW: HDW2},
  0x21E5: {dir: H, sizes: [.806], stretch: [0, 0x2212, 0x21E5], HDW: HDW2},
  0x21FD: {dir: H, sizes: [.806], stretch: [0x21FD, 0x2212], HDW: HDW2},
  0x21FE: {dir: H, sizes: [.806], stretch: [0, 0x2212, 0x21FE], HDW: HDW2},
  0x21FF: {dir: H, sizes: [.886], stretch: [0x21FD, 0x2212, 0x21FE], HDW: HDW2},
  0x220F: {dir: V, sizes: VSIZES7},
  0x2210: {dir: V, sizes: VSIZES7},
  0x2211: {dir: V, sizes: [1.022, 1.45]},
  0x2212: DELIM23AF,
  0x2215: DELIM2F,
  0x221A: {dir: V, sizes: VSIZES9, stretch: [0xE024, 0xE023, 0xE022], HDW: HDW6},
  0x221B: {dir: V, sizes: VSIZES9, stretch: [0xE024, 0xE023, 0xE025], HDW: HDW6},
  0x221C: {dir: V, sizes: VSIZES9, stretch: [0xE024, 0xE023, 0xE026], HDW: HDW6},
  0x2223: DELIM2223,
  0x2225: {dir: V, sizes: [.879], stretch: [0, 0x2225], HDW: [.69, .189, .523]},
  0x222B: {dir: V, sizes: [.607, .979], stretch: [0xE03C, 0xE03D, 0xE03E], HDW: [.824, .32, .486]},
  0x222C: {dir: V, sizes: VSIZES8},
  0x222D: {dir: V, sizes: VSIZES8},
  0x222E: {dir: V, sizes: VSIZES8},
  0x222F: {dir: V, sizes: VSIZES8},
  0x2230: {dir: V, sizes: VSIZES8},
  0x2231: {dir: V, sizes: VSIZES8},
  0x2232: {dir: V, sizes: VSIZES8},
  0x2233: {dir: V, sizes: VSIZES8},
  0x22C0: {dir: V, sizes: VSIZES7},
  0x22C1: {dir: V, sizes: VSIZES7},
  0x22C2: {dir: V, sizes: [1.032, 1.461]},
  0x22C3: {dir: V, sizes: [1.032, 1.461]},
  0x2308: {dir: V, sizes: [.926, 1.23, 1.845, 2.46, 3.075], stretch: [0xE008, 0xE007], HDW: [.713, .213, .45]},
  0x2309: {dir: V, sizes: [.926, 1.23, 1.845, 2.46, 3.075], stretch: [0xE00B, 0xE00A], HDW: [.713, .213, .685]},
  0x230A: {dir: V, sizes: [.926, 1.23, 1.845, 2.46, 3.075], stretch: [0, 0xE007, 0xE006], HDW: [.713, .213, .45]},
  0x230B: {dir: V, sizes: [.926, 1.23, 1.845, 2.46, 3.075], stretch: [0, 0xE00A, 0xE009], HDW: [.713, .213, .685]},
  0x2312: DELIM23DC,
  0x2322: DELIM23DC,
  0x2323: DELIM23DD,
  0x2329: DELIM27E8,
  0x232A: DELIM27E9,
  0x23AA: {dir: V, sizes: [1.01], schar: [0xE00D], stretch: [0xE00D, 0xE00D, 0xE00D], HDW: [.75, .25, .64]},
  0x23AF: DELIM23AF,
  0x23B0: {dir: V, sizes: [1], schar: [0xE03A], stretch: [0xE00F, 0xE00D, 0xE010], HDW: [.75, .25, .64]},
  0x23B1: {dir: V, sizes: [1], schar: [0xE03B], stretch: [0xE012, 0xE00D, 0xE00C], HDW: [.75, .25, .64]},
  0x23B4: {dir: H, sizes: [.816, .925, 1.458, 1.991, 2.524, 3.057], stretch: [0xE027, 0xE028, 0xE029], HDW: [.663, .155, .926]},
  0x23B5: {dir: H, sizes: [.816, .925, 1.458, 1.991, 2.524, 3.057], stretch: [0xE02A, 0xE02B, 0xE02C], HDW: [.662, .156, .926]},
  0x23D0: {dir: V, sizes: [.304, .69, .879, 1.35, 1.827, 2.303, 2.78], stretch: [0, 0x2223], HDW: [.405, -0.101, .266]},
  0x23DC: DELIM23DC,
  0x23DD: DELIM23DD,
  0x23DE: DELIM23DE,
  0x23DF: DELIM23DF,
  0x23E0: {dir: H, sizes: [1, 1.46, 1.886, 2.312, 2.738, 3.164]},
  0x23E1: {dir: H, sizes: [1, 1.46, 1.886, 2.312, 2.738, 3.164]},
  0x2500: DELIM23AF,
  0x2758: DELIM2223,
  0x2772: {dir: V, sizes: VSIZES5},
  0x2773: {dir: V, sizes: VSIZES5},
  0x27E6: {dir: V, sizes: VSIZES5, stretch: [0x2553, 0x2551, 0x2559], HDW: [.717, .213, .708]},
  0x27E7: {dir: V, sizes: VSIZES5, stretch: [0x2556, 0x2551, 0x255C], HDW: [.717, .213, .708]},
  0x27E8: DELIM27E8,
  0x27E9: DELIM27E9,
  0x27EA: {dir: V, sizes: VSIZES5},
  0x27EB: {dir: V, sizes: VSIZES5},
  0x27EE: {dir: V, sizes: [.853], stretch: [0xE002, 0xE001, 0xE000], HDW: [.676, .177, 1.184]},
  0x27EF: {dir: V, sizes: [.853], stretch: [0xE005, 0xE004, 0xE003], HDW: [.676, .177, .926]},
  0x27F0: {dir: V, sizes: [.818], stretch: [0x27F0, 0xE037], HDW: [.662, .156, .685]},
  0x27F1: {dir: V, sizes: [.818], stretch: [0, 0xE037, 0x27F1], HDW: [.662, .156, .685]},
  0x27F5: DELIM2190,
  0x27F6: DELIM2192,
  0x27F7: DELIM2194,
  0x27F8: DELIM21D0,
  0x27F9: DELIM21D2,
  0x27FA: DELIM21D4,
  0x27FB: DELIM21A4,
  0x27FC: DELIM21A6,
  0x27FD: DELIM2906,
  0x27FE: DELIM2907,
  0x2906: DELIM2906,
  0x2907: DELIM2907,
  0x290A: {dir: V, sizes: [.818], stretch: [0x290A, 0xE038], HDW: [.662, .156, .732]},
  0x290B: {dir: V, sizes: [.818], stretch: [0, 0xE038, 0x290B], HDW: [.662, .156, .732]},
  0x2912: {dir: V, sizes: [.818], stretch: [0x2912, 0x23D0], HDW: HDW4},
  0x2913: {dir: V, sizes: [.818], stretch: [0, 0x23D0, 0x2913], HDW: HDW4},
  0x294E: {dir: H, sizes: [.85], stretch: [0x21BC, 0x2212, 0x21C0], HDW: HDW2},
  0x294F: {dir: V, sizes: [.818], stretch: [0x21BE, 0x23D0, 0x21C2], HDW: HDW4},
  0x2950: {dir: H, sizes: [.85], stretch: [0x21BD, 0x2212, 0x21C1], HDW: HDW2},
  0x2951: {dir: V, sizes: [.818], stretch: [0x21BF, 0x23D0, 0x21C3], HDW: HDW4},
  0x2952: {dir: H, sizes: [.816], stretch: [0x2952, 0x2212], HDW: HDW2},
  0x2953: {dir: H, sizes: [.816], stretch: [0, 0x2212, 0x2953], HDW: HDW2},
  0x2954: {dir: V, sizes: [.818], stretch: [0x2954, 0x23D0], HDW: HDW4},
  0x2955: {dir: V, sizes: [.818], stretch: [0, 0x23D0, 0x2955], HDW: HDW4},
  0x2956: {dir: H, sizes: [.816], stretch: [0x2956, 0x2212], HDW: HDW2},
  0x2957: {dir: H, sizes: [.816], stretch: [0, 0x2212, 0x2957], HDW: HDW2},
  0x2958: {dir: V, sizes: [.818], stretch: [0x2958, 0x23D0], HDW: HDW4},
  0x2959: {dir: V, sizes: [.818], stretch: [0, 0x23D0, 0x2959], HDW: HDW4},
  0x295A: {dir: H, sizes: [.816], stretch: [0x21BC, 0x2212, 0x22A3], HDW: HDW2},
  0x295B: {dir: H, sizes: [.816], stretch: [0xE0B6, 0x2212, 0x21C0], HDW: HDW2},
  0x295C: {dir: V, sizes: [.818], stretch: [0x21BE, 0x23D0, 0x5F], HDW: HDW4},
  0x295D: {dir: V, sizes: [.818], stretch: [0x22A4, 0x23D0, 0x21C2], HDW: HDW4},
  0x295E: {dir: H, sizes: [.816], stretch: [0x21BD, 0x2212, 0x22A3], HDW: HDW2},
  0x295F: {dir: H, sizes: [.816], stretch: [0xE0B6, 0x2212, 0x21C1], HDW: HDW2},
  0x2960: {dir: V, sizes: [.818], stretch: [0x21BF, 0x23D0, 0x5F], HDW: HDW4},
  0x2961: {dir: V, sizes: [.818], stretch: [0x22A4, 0x23D0, 0x21C3], HDW: HDW4},
  0x2980: {dir: V, sizes: [.884], stretch: [0, 0x2980], HDW: [.695, .189, .594]},
  0x2983: {dir: V, sizes: VSIZES5},
  0x2984: {dir: V, sizes: VSIZES5},
  0x2985: {dir: V, sizes: [.932, 1.23, 1.848, 2.46, 3.075]},
  0x2986: {dir: V, sizes: [.932, 1.23, 1.848, 2.46, 3.075]},
  0x2997: {dir: V, sizes: [.932], stretch: [0xE10D, 0x23D0, 0xE10C], HDW: [.719, .213, .511]},
  0x2998: {dir: V, sizes: [.932], stretch: [0xE10C, 0x23D0, 0xE10D], HDW: [.719, .213, .511]},
  0x29F8: {dir: V, sizes: [1.02, 1.845]},
  0x29F9: {dir: V, sizes: [1.02, 1.845]},
  0x2A00: {dir: V, sizes: VSIZES7},
  0x2A01: {dir: V, sizes: VSIZES7},
  0x2A02: {dir: V, sizes: VSIZES7},
  0x2A03: {dir: V, sizes: [1.032, 1.461]},
  0x2A04: {dir: V, sizes: [1.032, 1.461]},
  0x2A05: {dir: V, sizes: VSIZES7},
  0x2A06: {dir: V, sizes: VSIZES7},
  0x2A07: {dir: V, sizes: VSIZES7},
  0x2A08: {dir: V, sizes: VSIZES7},
  0x2A09: {dir: V, sizes: VSIZES7},
  0x2A0A: {dir: V, sizes: [1.022, 1.45]},
  0x2A0B: {dir: V, sizes: VSIZES8},
  0x2A0C: {dir: V, sizes: VSIZES8},
  0x2A0D: {dir: V, sizes: VSIZES8},
  0x2A0E: {dir: V, sizes: VSIZES8},
  0x2A0F: {dir: V, sizes: VSIZES8},
  0x2A10: {dir: V, sizes: VSIZES8},
  0x2A11: {dir: V, sizes: VSIZES8},
  0x2A12: {dir: V, sizes: VSIZES8},
  0x2A13: {dir: V, sizes: VSIZES8},
  0x2A14: {dir: V, sizes: VSIZES8},
  0x2A15: {dir: V, sizes: VSIZES8},
  0x2A16: {dir: V, sizes: VSIZES8},
  0x2A17: {dir: V, sizes: VSIZES8},
  0x2A18: {dir: V, sizes: VSIZES8},
  0x2A19: {dir: V, sizes: VSIZES8},
  0x2A1A: {dir: V, sizes: VSIZES8},
  0x2A1B: {dir: V, sizes: [1.267, 2.426]},
  0x2A1C: {dir: V, sizes: [1.267, 2.426]},
  0x2AFC: {dir: V, sizes: [1.022, 1.23, 1.875]},
  0x2AFF: {dir: V, sizes: [1.022, 1.23, 1.875]},
  0x2B45: {dir: H, sizes: [.818], stretch: [0x2B45, 0xE039], HDW: [.662, .156, .928]},
  0x2B46: {dir: H, sizes: [.818], stretch: [0, 0xE039, 0x2B46], HDW: [.662, .156, .928]},
  0x3008: DELIM27E8,
  0x3009: DELIM27E9,
  0xFE37: DELIM23DE,
  0xFE38: DELIM23DF,
};
