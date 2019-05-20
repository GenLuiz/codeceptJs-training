pipeline {
    agent any
    tools {nodejs "NodeJs"}
    stages {
        stage('Build') {
            steps {
                sh 'npm uninstall -g nativescript'
                sh 'npm cache verify'
                sh 'npm install -g nativescript@latest'
                sh 'npm install -g node-gyp'
                sh 'node-gyp configure'
                sh 'node-gyp build'
                sh 'npm install selenium-standalone'
                sh 'npm install @wdio/cli'
                sh 'selenium-standalone start'
            }
        }
        stage('run tests') {
            steps{
                sh 'codeceptjs run --steps'
            }
        }
    }
}