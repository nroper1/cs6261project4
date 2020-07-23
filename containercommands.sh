#!/bin/sh
RUN sudo npm install -g @angular/cli
RUN sudo npm install -g http-server
RUN sudo ng build
RUN sudo npm install
RUN ./node_modules/protractor/bin/webdriver-manager update
RUN sudo ng serve
