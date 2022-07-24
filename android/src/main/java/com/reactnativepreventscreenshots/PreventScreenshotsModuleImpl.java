package com.reactnativepreventscreenshots;

import static com.facebook.react.bridge.UiThreadUtil.runOnUiThread;

import android.view.WindowManager;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.Promise;

/**
 * This is where the module implementation lives
 * The exposed methods can be defined in the `turbo` and `legacy` folders
 */
public class PreventScreenshotsModuleImpl {
    public static final String NAME = "PreventScreenshots";

    private boolean _isPrevented = false;

    private final ReactApplicationContext _reactContext;

    PreventScreenshotsModuleImpl(ReactApplicationContext reactContext) {
        _reactContext = reactContext;
    }

    public void start(final Promise promise) {
        runOnUiThread(
          () -> {
              try {
                  _reactContext.getCurrentActivity().getWindow().addFlags(WindowManager.LayoutParams.FLAG_SECURE);
                  _isPrevented = true;
                  promise.resolve(true);
              } catch (Exception e) {
                  promise.reject("START_PREVENT_SCREENSHOT_FAILED", e);
              }
          }
        );
    }

    public void stop(final Promise promise) {
        runOnUiThread(
          () -> {
              try {
                  _reactContext.getCurrentActivity().getWindow().clearFlags(WindowManager.LayoutParams.FLAG_SECURE);
                  _isPrevented = false;
                  promise.resolve(false);
              } catch (Exception e) {
                  promise.reject("STOP_PREVENT_SCREENSHOT_FAILED", e);
              }
          }
        );
    }

    public void isPrevented(Promise promise) {
        promise.resolve(_isPrevented);
    }
}
