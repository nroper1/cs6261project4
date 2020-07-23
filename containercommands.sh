#!/bin/sh
RUN sudo npm install -g @angular/cli
RUN sudo npm install -g http-server
RUN ng build
RUN npm install
RUN webdriver-manager start
