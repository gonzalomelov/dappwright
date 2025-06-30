import { Page } from 'playwright-core';

import { waitForChromeState } from '../../../helpers';
import { performPopupAction } from './util';

export const confirmNetworkSwitch = (page: Page) => async (): Promise<void> => {
  await performPopupAction(page, async (popup) => {
    // Wait for popup to load
    await popup.waitForLoadState();
    await popup.bringToFront();

    await popup.getByTestId('page-container-footer-next').or(popup.getByTestId('confirmation-submit-button')).click();

    await waitForChromeState(page);
  });
};
