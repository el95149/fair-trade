<template>
  <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true">
    <vl-view :zoom="2" :rotation="0"></vl-view>

    <template v-for="(marker, index) in markers">
      <vl-feature :properties="{prop: 'value', prop2: 'value'}">
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
</template>
<script src="./MapVM.js"></script>
