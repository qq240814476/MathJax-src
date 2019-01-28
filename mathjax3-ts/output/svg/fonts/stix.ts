/*************************************************************
 *
 *  Copyright (c) 2017 The MathJax Consortium
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

/**
 * @fileoverview  The MathJax TeXFont object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */

import {CommonStixFont} from '../../common/fonts/stix.js';
import {DelimiterData, CharData, CharOptions, DelimiterMap, CharMapMap, CSS, V, H} from '../FontData.js';
import {StyleList, StyleData} from '../../common/CssStyles.js';
import {em} from '../../../util/lengths.js';
import {OptionList, defaultOptions, userOptions} from '../../../util/Options.js';
import {StringMap} from '../Wrapper.js';
import {DIRECTION} from '../FontData.js';

import {boldItalic} from './stix/bold-italic.js';
import {bold} from './stix/bold.js';
import {doubleStruck} from './stix/double-struck.js';
import {frakturBold} from './stix/fraktur-bold.js';
import {fraktur} from './stix/fraktur.js';
import {italic} from './stix/italic.js';
import {largeop} from './stix/largeop.js';
import {monospace} from './stix/monospace.js';
import {normal} from './stix/normal.js';
import {sansSerifBoldItalic} from './stix/sans-serif-bold-italic.js';
import {sansSerifBold} from './stix/sans-serif-bold.js';
import {sansSerifItalic} from './stix/sans-serif-italic.js';
import {sansSerif} from './stix/sans-serif.js';
import {scriptBold} from './stix/script-bold.js';
import {script} from './stix/script.js';
import {smallop} from './stix/smallop.js';
import {texCaligraphicBold} from './stix/tex-caligraphic-bold.js';
import {texCaligraphic} from './stix/tex-caligraphic.js';
import {texMathit} from './stix/tex-mathit.js';
import {texOldstyleBold} from './stix/tex-oldstyle-bold.js';
import {texOldstyle} from './stix/tex-oldstyle.js';
import {texSize3} from './stix/tex-size3.js';
import {texSize4} from './stix/tex-size4.js';
import {texSize5} from './stix/tex-size5.js';
import {stixWebVariant} from './stix/stix-web-variant.js';

import {delimiters} from '../../common/fonts/stix/delimiters.js';

/***********************************************************************************/
/**
 *  The TeXFont class
 */
export class StixFont extends CommonStixFont {

    /**
     *  The stretchy delimiter data (incomplete at the moment)
     */
    protected static defaultDelimiters: DelimiterMap = delimiters;

    /**
     *  The character data by variant
     */
    protected static defaultChars: CharMapMap = {
        'normal': normal,
        'bold': bold,
        'italic': italic,
        'bold-italic': boldItalic,
        'double-struck': doubleStruck,
        'fraktur': fraktur,
        'bold-fraktur': frakturBold,
        'script': script,
        'bold-script': scriptBold,
        'sans-serif': sansSerif,
        'bold-sans-serif': sansSerifBold,
        'sans-serif-italic': sansSerifItalic,
        'bold-sans-serif-italic': sansSerifBoldItalic,
        'monospace': monospace,
        '-smallop': smallop,
        '-largeop': largeop,
        '-size3': texSize3,
        '-size4': texSize4,
        '-stretchy': texSize5,
        '-tex-caligraphic': texCaligraphic,
        '-tex-bold-caligraphic': texCaligraphicBold,
        '-tex-mathit': texMathit,
        '-tex-oldstyle': texOldstyle,
        '-tex-bold-oldstyle': texOldstyleBold,
        '-tex-variant': stixWebVariant
    };

}

