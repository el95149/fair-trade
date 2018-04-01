<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-card header="Today's Real-time Trade Message Map">

        <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true">
          <vl-view :zoom="2" :rotation="0"></vl-view>

          <template v-for="(marker, index) in markers">
            <vl-feature>
              <vl-geom-point :coordinates="marker.coordinates"></vl-geom-point>
              <vl-style-box>
                <vl-style-circle>
                  <vl-style-stroke color="red"></vl-style-stroke>
                  <vl-style-fill color="red"></vl-style-fill>
                </vl-style-circle>
              </vl-style-box>
            </vl-feature>
          </template>

          <vl-layer-tile id="osm">
            <vl-source-osm></vl-source-osm>
          </vl-layer-tile>

        </vl-map>

      </b-card>

      <b-alert show variant="primary" class="mt-3">
        <i class="fa fa-exclamation-triangle"></i>
        The map will auto-update every time a bunch of new Trade Messages is created
      </b-alert>

    </div>
  </div>
</template>
<script src="./MapVM.js"></script>
