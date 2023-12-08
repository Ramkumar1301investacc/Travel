package com.gilitravel.angular;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
  public void onBackPressed() {
    // Add your back button handling logic here

    // For example, if you want to navigate back to a specific activity:
    // Intent intent = new Intent(this, YourPreviousActivity.class);
    // startActivity(intent);

    // If you want to perform default behavior (like going back):
    super.onBackPressed();

  }
  public void onBackPressed() {
    // Add your back button handling logic here

    // For example, if you want to navigate back to a specific activity:
    // Intent intent = new Intent(this, YourPreviousActivity.class);
    // startActivity(intent);

    // If you want to perform default behavior (like going back):

    Bridge bridge = this.getBridge();
    String currentRoute = CapacitorRouterPlugin.getWebViewLastPath(this.getWebView());

    

    // Handle the back button logic based on the current route
    if ("/destination".equals(currentRoute)) {
        bridge.executePlugin("CapacitorRouter", "navigate", new PluginCall(bridge, CapacitorRouterPlugin.class.getName(), "navigate", "/"));
    } else if ("/form".equals(currentRoute)) {
        // Handle form-specific logic
        // For example, go back to the home route
        bridge.executePlugin("CapacitorRouter", "navigate", new PluginCall(bridge, CapacitorRouterPlugin.class.getName(), "navigate", "/"));
    } else {
        super.onBackPressed();
    }
}
   
}
