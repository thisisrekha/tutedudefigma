import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './APPLYNOWBUTTON_Property1WithPr.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 1692:44 */
export const APPLYNOWBUTTON_Property1WithPr: FC<Props> = memo(function APPLYNOWBUTTON_Property1WithPr(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      <div className={classes.applyNowFor2999}>Apply now for ₹ 2999</div>
    </button>
  );
});
