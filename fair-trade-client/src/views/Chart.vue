<template>
  <div class="wrapper">
    <div class="animated fadeIn">

      <b-card header="Today's trade messages volume Per currency pair">

        <div class="filter-bar">
          <div class="form-inline">
            <b-form-group description="Select Currency (from)">
              <b-input-group class="mr-3">
                <multiselect name="currencyFrom" id="currencyFrom" :allowEmpty="false"
                             v-model="currencyFrom" :options="currencies"
                             :searchable="true" placeholder="Currency (From)" @input="refresh">
                </multiselect>
              </b-input-group>
            </b-form-group>
            <b-form-group description="Select Currency (to)">
              <b-input-group>
                <multiselect name="currencyTo" id="currencyTo" :allowEmpty="false"
                             v-model="currencyTo" :options="currencies"
                             :searchable="true" placeholder="Currency (To)" @input="refresh">
                </multiselect>
              </b-input-group>
            </b-form-group>
          </div>
        </div>

        <hr class="mb-4"/>

        <line-chart :chart-data="chartData"/>
      </b-card>
    </div>
  </div>
</template>
<script src="./ChartVM.js"></script>
