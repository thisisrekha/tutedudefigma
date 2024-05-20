import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Progress_Property1Default.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:26 */
export const Progress_Property1Default: FC<Props> = memo(function Progress_Property1Default(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle8808}></div>
    </div>
  );
});
