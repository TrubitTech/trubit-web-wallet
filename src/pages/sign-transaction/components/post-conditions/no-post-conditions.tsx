import { Stack, Circle, Box } from '@stacks/ui';
import { color } from '@stacks/ui-utils';
import { FiLock } from 'react-icons/fi';

import { Body } from '@components/typography';

export function NoPostConditions(): JSX.Element {
  return (
    <Stack alignItems="center" spacing="base" p="base-loose" isInline>
      <Circle bg={color('bg-4')} flexShrink={0}>
        <FiLock />
      </Circle>
      <Box flexGrow={1}>
        <Body>
          No transfers (besides fees) will be made from your account or the transaction will abort.
        </Body>
      </Box>
    </Stack>
  );
}
