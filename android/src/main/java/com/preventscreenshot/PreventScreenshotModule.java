// PreventScreenshotModule.java

package com.preventscreenshot;

import static com.facebook.react.bridge.UiThreadUtil.runOnUiThread;

import android.app.Activity;
import android.view.Window;
import android.view.WindowManager;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

public class PreventScreenshotModule extends ReactContextBaseJavaModule {
    private boolean _isPrevented = false;

    private final ReactApplicationContext reactContext;

    public PreventScreenshotModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "PreventScreenshot";
    }

    @ReactMethod
    public void start(final Promise promise) {
        runOnUiThread(
                new Runnable() {
                    @Override
                    public void run() {
                        try {
                            reactContext.getCurrentActivity().getWindow().addFlags(WindowManager.LayoutParams.FLAG_SECURE);
                            _isPrevented = true;
                            promise.resolve(true);
                        } catch (Exception e) {
                            promise.reject("START_PREVENT_SCREENSHOT_FAILED", e);
                        }
                    }
                }
        );
    }

    @ReactMethod
    public void stop(final Promise promise) {
        runOnUiThread(
                new Runnable() {
                    @Override
                    public void run() {
                        try {
                            reactContext.getCurrentActivity().getWindow().clearFlags(WindowManager.LayoutParams.FLAG_SECURE);
                            _isPrevented = false;
                            promise.resolve(false);
                        } catch (Exception e) {
                            promise.reject("STOP_PREVENT_SCREENSHOT_FAILED", e);
                        }
                    }
                }
        );
    }

    @ReactMethod
    public void isPrevented(Promise promise) {
        promise.resolve(_isPrevented);
    }
}
