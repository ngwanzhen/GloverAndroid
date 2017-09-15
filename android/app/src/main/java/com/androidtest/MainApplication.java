package com.androidtest;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.remobile.toast.RCTToastPackage;
import com.rusel.RCTBluetoothSerial.RCTBluetoothSerialPackage;
import com.rhaker.reactnativesmsandroid.RNSmsAndroidPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import com.slowpath.hockeyapp.RNHockeyAppModule;
import com.slowpath.hockeyapp.RNHockeyAppPackage;

import com.slowpath.hockeyapp.RNHockeyAppModule;
import com.slowpath.hockeyapp.RNHockeyAppPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
            new RNHockeyAppPackage(MainApplication.this),
            new RCTBluetoothSerialPackage(),
            new RNSmsAndroidPackage(),
            new MainReactPackage(),
            new RCTToastPackage(),
            new MapsPackage(),
            new VectorIconsPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
