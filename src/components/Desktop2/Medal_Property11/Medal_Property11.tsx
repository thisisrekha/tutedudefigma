import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Medal_Property11.module.css';

interface Props {
  className?: string;
  classes?: {
    medal?: string;
    root?: string;
  };
}
/* @figmaId 1:18 */
export const Medal_Property11: FC<Props> = memo(function Medal_Property11(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.medal || ''} ${classes.medal}`}></div>
    </div>
  );
});
