package com.reactnativepreventscreenshots;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class PreventScreenshotsModule extends ReactContextBaseJavaModule {
    public static final String NAME = PreventScreenshotsModuleImpl.NAME;

    private static PreventScreenshotsModuleImpl _preventScreenshotsModuleImpl;

    PreventScreenshotsModule(ReactApplicationContext context) {
        super(context);
        _preventScreenshotsModuleImpl = new PreventScreenshotsModuleImpl(context);
    }

    @Override
    @NonNull
    public String getName() {
        return PreventScreenshotsModuleImpl.NAME;
    }

    @ReactMethod
    public void start(final Promise promise) {
        _preventScreenshotsModuleImpl.start(promise);
    }

    @ReactMethod
    public void stop(final Promise promise) {
        _preventScreenshotsModuleImpl.stop(promise);
    }

    @ReactMethod
    public void isPrevented(Promise promise) {
        _preventScreenshotsModuleImpl.isPrevented(promise);
    }
}